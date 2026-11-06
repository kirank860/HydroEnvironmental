"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll motion shared by every inner page (mounted in <InnerPage />).
 * Lenis smooth scroll, .rv reveals and hero image parallax come from <Motion />.
 *  1. Hero: glow follows the pointer; content drifts up as the hero scrolls away
 *  2. .fx-card: staggered entrance + cursor-tracking glow (--mx / --my)
 *  3. .ab-words: statement words light up while scrolling (About)
 *  4. .ab-track: delivery-model rail fills, stages switch on (About)
 *  5. .grp-stats b / .hx-facts dt: numbers count up once in view
 *  6. Parallax (desktop): .px-band image bands, staggered card columns, [data-speed] accents
 * Every block checks its elements exist, so pages only pay for what they use.
 * Skipped for prefers-reduced-motion and ?static / ?figma.
 */
export default function PageMotion() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("static") || params.has("figma")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const cleanups: (() => void)[] = [];
    const mm = gsap.matchMedia();
    const has = (sel: string) => !!document.querySelector(sel);
    const canHover = window.matchMedia("(hover: hover)").matches;

    const ctx = gsap.context(() => {
      // 1. Hero
      const hero = document.querySelector<HTMLElement>(".page-hero");
      if (hero) {
        gsap.to(".hx-in", { yPercent: -10, opacity: 0.25, ease: "none", scrollTrigger: { trigger: hero, start: "35% top", end: "bottom top", scrub: true } });
        const glow = hero.querySelector<HTMLElement>(".hx-glow");
        if (glow && canHover) {
          const gx = gsap.quickTo(glow, "x", { duration: 1.2, ease: "power3.out" });
          const gy = gsap.quickTo(glow, "y", { duration: 1.2, ease: "power3.out" });
          const onMove = (e: PointerEvent) => {
            const r = hero.getBoundingClientRect();
            gx(e.clientX - r.left - r.width / 2);
            gy(e.clientY - r.top - r.height / 2);
          };
          hero.addEventListener("pointermove", onMove);
          cleanups.push(() => hero.removeEventListener("pointermove", onMove));
        }
      }

      // 2. Cards
      if (has(".fx-card")) {
        gsap.set(".fx-card", { opacity: 0 });
        ScrollTrigger.batch(".fx-card", {
          start: "top 90%", once: true,
          onEnter: (b) => gsap.fromTo(b, { opacity: 0, y: 48, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out", stagger: 0.07, overwrite: true }),
        });
        if (canHover) {
          const onCard = (e: PointerEvent) => {
            const c = (e.target as HTMLElement).closest<HTMLElement>(".fx-card");
            if (!c) return;
            const r = c.getBoundingClientRect();
            c.style.setProperty("--mx", `${e.clientX - r.left}px`);
            c.style.setProperty("--my", `${e.clientY - r.top}px`);
          };
          document.addEventListener("pointermove", onCard);
          cleanups.push(() => document.removeEventListener("pointermove", onCard));
        }
      }

      // 3. Statement words
      const words = gsap.utils.toArray<HTMLElement>(".ab-words span");
      if (words.length) {
        gsap.fromTo(words, { opacity: 0.14 }, {
          opacity: 1, ease: "none", stagger: 0.08,
          scrollTrigger: { trigger: ".ab-words", start: "top 80%", end: "bottom 45%", scrub: true },
        });
      }

      // 4. Delivery-model rail
      const stages = gsap.utils.toArray<HTMLElement>(".ab-stage");
      if (stages.length) {
        const light = (p: number) => {
          const n = Math.round(p * (stages.length - 1));
          stages.forEach((s, i) => s.classList.toggle("on", i <= n && p > 0.02));
        };
        const rail = (axis: "scaleX" | "scaleY") =>
          gsap.fromTo(".ab-fill", { [axis]: 0 }, {
            [axis]: 1, ease: "none",
            scrollTrigger: { trigger: ".ab-track", start: "top 75%", end: "bottom 55%", scrub: 0.6, onUpdate: (s) => light(s.progress) },
          });
        mm.add("(min-width: 1001px)", () => { rail("scaleX"); });
        mm.add("(max-width: 1000px)", () => { rail("scaleY"); });
        gsap.from(stages, { opacity: 0, y: 30, duration: 0.9, ease: "expo.out", stagger: 0.06, scrollTrigger: { trigger: ".ab-track", start: "top 82%" } });
      }

      // 5. Count-up ("137+", "1,600 m³/h", "12"); years and words are left as they are
      gsap.utils.toArray<HTMLElement>(".grp-stats b, .hx-facts dt").forEach((b) => {
        const text = b.textContent ?? "";
        const m = text.match(/^([\d,]+)(.*)$/);
        if (!m) return;
        const target = Number(m[1].replace(/,/g, ""));
        if (!target || /^(19|20)\d\d$/.test(m[1])) return;
        const pad = /^0\d/.test(m[1]) ? m[1].length : 0;
        const obj = { v: 0 };
        if (b.closest(".hx-facts")) b.textContent = (pad ? "0".repeat(pad) : "0") + m[2];
        gsap.to(obj, {
          v: target, duration: 1.8, ease: "power2.out", delay: b.closest(".hx-facts") ? 0.9 : 0,
          scrollTrigger: { trigger: b, start: "top 95%", once: true },
          onUpdate: () => {
            const n = Math.round(obj.v);
            b.textContent = (pad ? String(n).padStart(pad, "0") : n.toLocaleString("en-US")) + m[2];
          },
          onComplete: () => { b.textContent = text; },
        });
      });

      // 6. Parallax — desktop only (on phones it fights touch scrolling and costs battery)
      mm.add("(min-width: 901px)", () => {
        // 6a. Image bands: frame opens, photo slower than the page, text faster
        gsap.utils.toArray<HTMLElement>(".px-band").forEach((band) => {
          const pass = { trigger: band, start: "top bottom", end: "bottom top", scrub: true };
          gsap.fromTo(band.querySelector(".px-frame"), { clipPath: "inset(10% 6% round 28px)" }, {
            clipPath: "inset(0% 0% round 0px)", ease: "none",
            scrollTrigger: { trigger: band, start: "top bottom", end: "top 25%", scrub: true },
          });
          gsap.fromTo(band.querySelector(".px-img"), { yPercent: -12 }, { yPercent: 12, ease: "none", scrollTrigger: pass });
          gsap.fromTo(band.querySelector(".px-copy"), { yPercent: 40 }, { yPercent: -40, ease: "none", scrollTrigger: pass });
        });

        // 6a2. Related-projects strip: horizontal glide driven by vertical scroll (no pin)
        gsap.utils.toArray<HTMLElement>(".strip-track").forEach((track) => {
          const dist = () => Math.max(0, track.scrollWidth - track.clientWidth);
          if (!dist()) return;
          gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: track, start: "top 85%", end: "bottom 15%", scrub: 0.6, invalidateOnRefresh: true } });
        });
        // 6a3. Split-hero photo drifts inside its frame
        if (has(".hx-panel-img")) gsap.to(".hx-panel-img", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".page-hero", start: "top top", end: "bottom top", scrub: true } });

        // 6b. Card grids: alternate columns drift at a different speed (yPercent, so it
        //     stacks with the y used by the entrance animation)
        gsap.utils.toArray<HTMLElement>(".ab-why-grid, .d-grid, .d-more-grid").forEach((grid) => {
          const cards = Array.from(grid.children) as HTMLElement[];
          if (cards.length < 3) return;
          const left0 = cards[0].offsetLeft;
          const colW = cards[0].offsetWidth || 1;
          const odd = cards.filter((c) => Math.round((c.offsetLeft - left0) / colW) % 2 === 1);
          if (!odd.length) return;
          gsap.fromTo(odd, { yPercent: 10 }, { yPercent: -10, ease: "none", scrollTrigger: { trigger: grid, start: "top bottom", end: "bottom top", scrub: true } });
        });

        // 6c. Accents: big pillar numbers and section glows float at their own speed
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const d = (Number(el.dataset.speed) || 0.2) * 100;
          gsap.fromTo(el, { yPercent: d }, { yPercent: -d, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      cleanups.forEach((f) => f());
      mm.revert();
      ctx.revert();
    };
  }, []);

  return null;
}
