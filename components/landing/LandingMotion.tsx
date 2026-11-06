"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { heroReady } from "@/lib/ready";

/**
 * Homepage motion — modelled on the reference site's scroll story:
 *  1. Hero intro, then an arc panel rises over the pinned hero with the statement
 *  2. "Every system" pins while its lines swap with a blur dissolve; line art draws
 *  3. Journey — horizontal chapters with per-chapter reveals and progress dashes
 *  4. Feature — masked line reveal, floating drop with parallax
 *  5. Band — big lines slide up out of masks
 *  6. Steps — sticky stacked cards; covered cards scale back
 *  7. Where we work — a winding path draws itself with a travelling dot
 *  8. Reach us + general reveals; top progress hairline
 * Skipped for ?figma / ?static and prefers-reduced-motion (static layout).
 */
export default function LandingMotion() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const staticMode = params.has("figma") || params.has("static");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (staticMode || reduce) { heroReady.resolve(); return; }

    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    root.classList.add("anim");

    const lenis = new Lenis({ lerp: 0.085 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      const id = a?.getAttribute("href");
      if (!a || !id || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement); }
    };
    document.addEventListener("click", onAnchor);

    const mm = gsap.matchMedia();
    const blurOut = { autoAlpha: 0, y: -34, filter: "blur(14px)", duration: 1, ease: "power2.in" };
    const blurIn = { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" };
    const blurFrom = { autoAlpha: 0, y: 34, filter: "blur(14px)" };

    let rebuild = () => {};
    const ctx = gsap.context(() => {
      // progress hairline
      gsap.to(".lp-progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      // 1 · hero intro (after preloader)
      const intro = gsap.timeline({ paused: true })
        .from(".hero-media", { scale: 1.25, filter: "blur(10px) brightness(.6)", duration: 2.2, ease: "expo.out" }, 0)
        .from(".hero h1 .w > span", { yPercent: 115, rotate: 4, duration: 1.3, ease: "power4.out", stagger: 0.07 }, 0.15)
        .from(".hero-eyebrow", { opacity: 0, x: -24, duration: 1, ease: "power3.out" }, 0.1)
        .from(".h-fade:not(.hero-eyebrow)", { opacity: 0, y: 28, duration: 1.1, ease: "power3.out", stagger: 0.1 }, 0.75)
        .from(".site-header .bar", { yPercent: -60, opacity: 0, duration: 1, ease: "power3.out" }, 0.5)
        .from(".hero-rays, .hero-fx", { opacity: 0, duration: 2 }, 0.6);
      heroReady.promise.then(() => intro.play());

      // 1b · arc statement rises over the pinned hero
      gsap.timeline({ scrollTrigger: { trigger: "#intro", start: "top top", end: "+=170%", pin: true, scrub: 1 } })
        .to(".hero-media", { scale: 1.12, ease: "none", duration: 1 }, 0)
        .to(".scroll-cue", { autoAlpha: 0, duration: 0.1 }, 0)
        // the hill appears as soon as scrolling starts, then swells to cover the hero (text stays put underneath)
        .fromTo("#intro .statement", { clipPath: "ellipse(85% 0% at 50% 100%)" }, { clipPath: "ellipse(85% 30% at 50% 100%)", ease: "power1.out", duration: 0.08 }, 0)
        .to("#intro .statement", { clipPath: "ellipse(160% 140% at 50% 100%)", ease: "power1.in", duration: 0.55 }, 0.08)
        .to(".hero-inner", { autoAlpha: 0, ease: "none", duration: 0.2 }, 0.45)
        .from("#intro .statement .label", { autoAlpha: 0, y: 30, duration: 0.25 }, 0.4)
        .from("#intro .statement .l1", { autoAlpha: 0, y: 50, duration: 0.3 }, 0.45)
        .from("#intro .statement .l2", { autoAlpha: 0, y: 30, filter: "blur(14px)", duration: 0.35 }, 0.62)
        .to({}, { duration: 0.25 });

      // 2 · Every system — title waits, then each line blurs in and dissolves out
      gsap.from(".ev-drop, .ev-title", { autoAlpha: 0, y: 40, duration: 1.1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".ev", start: "top 70%" } });
      const groups = gsap.utils.toArray<HTMLElement>(".ev-g");
      const art = gsap.utils.toArray<SVGGeometryElement>(".ev-art .draw");
      art.forEach((p) => { const l = p.getTotalLength?.() ?? 400; gsap.set(p, { strokeDasharray: l, strokeDashoffset: l }); });
      gsap.set(groups, blurFrom);
      const ev = gsap.timeline({ scrollTrigger: { trigger: ".ev", start: "top top", end: "+=" + groups.length * 90 + "%", pin: true, scrub: 1 } });
      ev.to(groups[0], blurIn, 0.25)
        .fromTo(".ev-ghost", { xPercent: -42 }, { xPercent: -58, ease: "none", duration: groups.length * 1.8 }, 0)
        .to(art, { strokeDashoffset: 0, ease: "none", duration: groups.length * 1.2, stagger: 0.05 }, 0);
      groups.forEach((g, i) => {
        if (i === 0) return;
        const at = 1.6 + (i - 1) * 1.6;
        ev.to(groups[i - 1], blurOut, at).to(g, blurIn, at + 0.35);
      });
      ev.to({}, { duration: 0.6 });

      // 3 · Journey (desktop horizontal)
      mm.add("(min-width: 901px)", () => {
        const track = document.querySelector<HTMLElement>(".jr-track");
        if (!track) return;
        const dots = document.querySelectorAll(".jr-dashes i");
        const chs = gsap.utils.toArray<HTMLElement>(".jr-ch");
        const dist = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -dist(), ease: "none",
          scrollTrigger: {
            trigger: ".jr", start: "top top", end: () => "+=" + dist() * 1.1, pin: true, scrub: 1, invalidateOnRefresh: true,
            onUpdate: (s) => {
              const i = Math.min(chs.length - 1, Math.floor(s.progress * chs.length));
              dots.forEach((d, k) => d.classList.toggle("on", k === i));
            },
          },
        });
        chs.forEach((c) => {
          gsap.from(c.querySelectorAll(".jr-kick, h3, p, .jr-tag"), {
            autoAlpha: 0, y: 40, stagger: 0.08, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: c, containerAnimation: tween, start: "left 72%", toggleActions: "play none none reverse" },
          });
          gsap.fromTo(c.querySelector(".jr-img"), { scale: 1.25, xPercent: 6 }, {
            scale: 1.05, xPercent: -6, ease: "none",
            scrollTrigger: { trigger: c, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
          });
        });
      });
      mm.add("(max-width: 900px)", () => {
        gsap.utils.toArray<HTMLElement>(".jr-ch").forEach((c) =>
          gsap.from(c, { autoAlpha: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 85%" } }),
        );
      });

      // 4 · Feature
      gsap.from(".ft-line > span", { yPercent: 110, duration: 1.2, ease: "power4.out", stagger: 0.1, scrollTrigger: { trigger: ".ft", start: "top 65%" } });
      gsap.from(".ft-label, .ft-p, .ft-actions", { autoAlpha: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.25, scrollTrigger: { trigger: ".ft", start: "top 65%" } });
      gsap.from(".ft-halo", { scale: 0.6, autoAlpha: 0, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: ".ft", start: "top 65%" } });
      gsap.from(".ft-drop", { y: 120, autoAlpha: 0, rotate: -8, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: ".ft", start: "top 65%" } });
      gsap.from(".ft-orb, .ft-chip", { scale: 0, autoAlpha: 0, duration: 1, ease: "back.out(2)", stagger: 0.08, delay: 0.5, scrollTrigger: { trigger: ".ft", start: "top 65%" } });
      gsap.to(".ft-visual", { y: -60, ease: "none", scrollTrigger: { trigger: ".ft", start: "top bottom", end: "bottom top", scrub: true } });

      // 5 · Band
      gsap.from(".bd-line > span", { yPercent: 110, ease: "none", stagger: 0.25, scrollTrigger: { trigger: ".bd", start: "top 80%", end: "center 55%", scrub: 1 } });
      gsap.from(".bd-label, .bd-p", { autoAlpha: 0, y: 24, duration: 1, stagger: 0.2, scrollTrigger: { trigger: ".bd", start: "top 70%" } });

      // 6 · Steps — stacked cards
      gsap.from(".st-head > *", { autoAlpha: 0, y: 40, duration: 1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".st", start: "top 75%" } });
      const cards = gsap.utils.toArray<HTMLElement>(".st-card");
      cards.forEach((c, i) => {
        gsap.from(c.querySelectorAll(".st-icon, .st-step, h3, p, .st-more"), { autoAlpha: 0, y: 30, stagger: 0.07, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 70%" } });
        gsap.fromTo(c.querySelector(".st-img"), { yPercent: -4 }, { yPercent: 4, ease: "none", scrollTrigger: { trigger: c, start: "top bottom", end: "bottom top", scrub: true } });
        const next = cards[i + 1];
        if (next) {
          gsap.to(c, { scale: 0.93, ease: "none", scrollTrigger: { trigger: next, start: "top bottom", end: "top 140px", scrub: true } });
        }
      });

      // 7 · Where we work — winding path
      const rows = document.querySelector<HTMLElement>(".pl-rows");
      const svg = rows?.querySelector<SVGSVGElement>(".pl-path");
      const base = svg?.querySelector<SVGPathElement>(".base");
      const draw = svg?.querySelector<SVGPathElement>(".draw");
      const dot = svg?.querySelector<SVGCircleElement>(".dot");
      let pathLen = 0;
      const buildPath = () => {
        if (!rows || !svg || !base || !draw) return;
        const W = rows.clientWidth, H = rows.clientHeight;
        svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
        const ys = Array.from(rows.querySelectorAll<HTMLElement>(".pl-row")).map((r) => r.offsetTop + r.offsetHeight / 2);
        let d = `M ${W / 2} -60`;
        let prevY = -60;
        ys.forEach((y, i) => {
          const side = i % 2 ? W * 0.9 : W * 0.1;
          d += ` C ${side} ${prevY + (y - prevY) * 0.35}, ${side} ${y - (y - prevY) * 0.35}, ${W / 2} ${y}`;
          prevY = y;
        });
        d += ` C ${W * 0.5} ${H}, ${W * 0.5} ${H}, ${W / 2} ${H + 40}`;
        base.setAttribute("d", d);
        draw.setAttribute("d", d);
        pathLen = draw.getTotalLength();
        gsap.set(draw, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
      };
      buildPath();
      rebuild = buildPath;
      if (rows && draw && dot) {
        const state = { p: 0 };
        gsap.to(state, {
          p: 1, ease: "none",
          scrollTrigger: { trigger: rows, start: "top 75%", end: "bottom 55%", scrub: 0.6 },
          onUpdate: () => {
            const l = pathLen * state.p;
            draw.style.strokeDashoffset = String(pathLen - l);
            const pt = draw.getPointAtLength(l);
            dot.setAttribute("cx", String(pt.x));
            dot.setAttribute("cy", String(pt.y));
            dot.style.opacity = state.p > 0.001 && state.p < 0.999 ? "1" : "0";
          },
        });
        ScrollTrigger.addEventListener("refreshInit", rebuild);
      }
      gsap.from(".pl-sec .st-head > *", { autoAlpha: 0, y: 40, duration: 1, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".pl-sec", start: "top 75%" } });
      gsap.utils.toArray<HTMLElement>(".pl-row").forEach((r) => {
        gsap.from(r.querySelector(".pl-media"), { autoAlpha: 0, y: 80, scale: 0.96, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: r, start: "top 80%" } });
        gsap.from(r.querySelectorAll(".pl-kick, h3, p"), { autoAlpha: 0, y: 30, stagger: 0.08, duration: 1, ease: "power3.out", scrollTrigger: { trigger: r, start: "top 70%" } });
        gsap.fromTo(r.querySelector(".pl-img"), { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: r, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // 8 · Reach us
      gsap.from(".rc-label, .rc-title, .rc-p, .rc-actions", { autoAlpha: 0, y: 40, duration: 1.1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".rc", start: "top 70%" } });
      gsap.from(".rc-card, .rc-map", { autoAlpha: 0, y: 50, duration: 1, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".rc-grid", start: "top 85%" } });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", rebuild);
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", onAnchor);
      mm.revert();
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      root.classList.remove("anim");
    };
  }, []);

  return null;
}
