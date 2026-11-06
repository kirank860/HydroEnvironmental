"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { heroReady } from "@/lib/ready";

/**
 * All scroll motion for the homepage (Hydrops-style):
 *  1. Hero intro — headline lines rise, content fades in
 *  2. Pinned hero → statement grows over it as a circle
 *  3. Pinned manifesto — three statements swap on scroll
 *  4. Chapters — horizontal scroll with snap (desktop), fade-ins (mobile)
 *  5. .rv elements fade up; CTA parallax
 *
 * Motion is skipped for ?figma / ?static (clean html.to.design capture)
 * and for prefers-reduced-motion, leaving a normal static page.
 */
export default function Motion() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const staticMode = params.has("figma") || params.has("static");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (staticMode || reduce) { heroReady.resolve(); return; }

    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    root.classList.add("anim");

    // Scroll feel — default snappy; compare with ?scroll=native | smooth | cinematic
    const feel = params.get("scroll") ?? "snappy";
    const lerps: Record<string, number> = { snappy: 0.16, smooth: 0.09, cinematic: 0.05 };
    const lenis = feel === "native" ? null : new Lenis({ lerp: lerps[feel] ?? lerps.snappy, wheelMultiplier: feel === "cinematic" ? 0.85 : 1 });
    lenis?.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis?.raf(t * 1000);
    if (lenis) gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      const id = a?.getAttribute("href");
      if (!a || !id || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); if (lenis) lenis.scrollTo(el as HTMLElement); else el.scrollIntoView({ behavior: "smooth" }); }
    };
    document.addEventListener("click", onAnchor);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const has = (sel: string) => !!document.querySelector(sel);

      // 0. Inner page hero — text intro is CSS (see .hx-*), here only the image parallax
      if (has(".page-hero")) {
        gsap.to(".page-hero-bg", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".page-hero", start: "top top", end: "bottom top", scrub: true } });
      }

      // 1. Hero intro — paused until the preloader lifts
      if (has("#intro")) {
      const intro = gsap.timeline({ paused: true })
        .from(".hero-media", { scale: 1.25, filter: "blur(10px) brightness(.6)", duration: 2.2, ease: "expo.out" }, 0)
        .from(".hero h1 .w > span", { yPercent: 115, rotate: 4, duration: 1.3, ease: "power4.out", stagger: 0.07 }, 0.15)
        .from(".hero-eyebrow", { opacity: 0, x: -24, duration: 1, ease: "power3.out" }, 0.1)
        .from(".h-fade:not(.hero-eyebrow)", { opacity: 0, y: 28, duration: 1.1, ease: "power3.out", stagger: 0.1 }, 0.75)
        .from(".site-header .bar", { yPercent: -60, opacity: 0, duration: 1, ease: "power3.out" }, 0.5)
        .from(".hero-rays, .hero-fx", { opacity: 0, duration: 2 }, 0.6);
      heroReady.promise.then(() => intro.play());

      // 2. Hero → statement circle reveal
      gsap.timeline({ scrollTrigger: { trigger: "#intro", start: "top top", end: "+=160%", pin: true, scrub: 1 } })
        // layered depth exit: words drift up at different speeds, then the block fades
        .to(".hero-media", { scale: 1.14, ease: "none" }, 0)
        .to(".hero h1 .w", { y: (i: number) => -(50 + i * 34), x: (i: number) => (i % 2 ? 14 : -10) * (i + 1), opacity: 0, ease: "power1.in", stagger: 0.025, duration: 0.55 }, 0)
        .to(".hero-row", { y: -160, opacity: 0, ease: "power1.in", duration: 0.5 }, 0.02)
        .to(".hero-inner", { opacity: 0, ease: "none", duration: 0.4 }, 0.3)
        .to(".scroll-cue", { y: 40, opacity: 0, ease: "power1.in", duration: 0.3 }, 0)
        .to("#intro .statement", { clipPath: "circle(150% at 50% 120%)", ease: "power1.in" }, 0)
        .from("#intro .statement .label, #intro .statement .l1", { y: 60, opacity: 0, ease: "none" }, 0.25)
        .from("#intro .statement .l2", { filter: "blur(14px)", opacity: 0, y: 30, ease: "none" }, 0.55)
        .from("#intro .statement p", { opacity: 0, y: 20, ease: "none" }, 0.75);
      }

      // 3. Manifesto statements
      if (has(".manifesto")) {
      const groups = gsap.utils.toArray<HTMLElement>(".m-group");
      const mdots = document.querySelectorAll(".m-progress i");
      const mindex = document.querySelectorAll(".m-index li");
      const mcards = document.querySelectorAll(".m-card");
      const artPaths = gsap.utils.toArray<SVGGeometryElement>(".m-art .draw");
      artPaths.forEach((p) => {
        const len = p.getTotalLength ? p.getTotalLength() : 400;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      const mt = gsap.timeline({
        scrollTrigger: {
          trigger: ".manifesto", start: "top top", end: "+=220%", pin: true, scrub: 1,
          onUpdate: (s) => {
            const i = Math.min(groups.length - 1, Math.floor(s.progress * groups.length));
            groups.forEach((d, k) => d.classList.toggle("on", k === i));
            mdots.forEach((d, k) => d.classList.toggle("on", k === i));
            mindex.forEach((d, k) => d.classList.toggle("on", k === i));
            mcards.forEach((d, k) => d.classList.toggle("on", k === i));
          },
        },
      });
      mt.fromTo(".ghost", { xPercent: -42 }, { xPercent: -58, ease: "none", duration: groups.length }, 0);
      mt.to(artPaths, { strokeDashoffset: 0, ease: "none", duration: groups.length * 0.7, stagger: 0.04 }, 0);
      mt.fromTo(".m-art.tl", { y: 40 }, { y: -40, ease: "none", duration: groups.length }, 0);
      mt.fromTo(".m-art.br", { y: -30 }, { y: 50, ease: "none", duration: groups.length }, 0);
      }

      // 4. Chapters
      const dots = document.querySelectorAll(".chapters .dashes i");
      mm.add("(min-width: 901px)", () => {
        const track = document.querySelector<HTMLElement>(".ch-track");
        const viewport = document.querySelector<HTMLElement>(".ch-viewport");
        if (!track || !viewport) return;
        const steps = track.children.length - 1;
        const dist = () => track.scrollWidth - viewport.clientWidth;
        gsap.to(track, {
          x: () => -dist(), ease: "none",
          scrollTrigger: {
            trigger: ".chapters", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1,
            invalidateOnRefresh: true,
            snap: { snapTo: 1 / steps, duration: { min: 0.2, max: 0.6 }, ease: "power1.inOut" },
            onUpdate: (s) => {
              const i = Math.min(steps, Math.round(s.progress * steps));
              dots.forEach((d, k) => d.classList.toggle("on", k === i));
            },
          },
        });
      });
      mm.add("(max-width: 900px)", () => {
        gsap.utils.toArray<HTMLElement>(".chapter").forEach((c) =>
          gsap.from(c, { opacity: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 85%" } }),
        );
      });

      // 5. Reveals + CTA parallax
      gsap.utils.toArray<HTMLElement>(".rv").forEach((el) =>
        gsap.from(el, { opacity: 0, y: 40, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }),
      );
      if (has(".cta")) gsap.to(".cta-bg", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".cta", start: "top bottom", end: "bottom top", scrub: true } });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", onAnchor);
      mm.revert();
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis?.destroy();
      root.classList.remove("anim");
    };
  }, []);

  return null;
}
