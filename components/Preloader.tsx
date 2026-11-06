"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroReady } from "@/lib/ready";
import { LogoMark } from "./Logo";

/**
 * Premium entrance: the HEES mark draws itself, a counter runs 00 → 100,
 * then the navy panel lifts away to reveal the hero.
 * Shown once per browser session; skipped for ?figma / ?static and reduced motion.
 */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const params = new URLSearchParams(window.location.search);
    const skip =
      params.has("figma") ||
      params.has("static") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem("hees-intro") === "1";

    if (skip) {
      el.style.display = "none";
      heroReady.resolve();
      return;
    }
    document.body.classList.add("is-loading");

    const counter = el.querySelector<HTMLElement>(".pl-count");
    const state = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("hees-intro", "1");
        el.style.display = "none";
        document.body.classList.remove("is-loading");
      },
    });
    tl.to(el.querySelectorAll(".pl-mark .draw"), { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut", stagger: 0.08 }, 0)
      .to(el.querySelector(".pl-mark-wrap .fill"), { opacity: 1, duration: 0.6 }, 0.8)
      .from(el.querySelectorAll(".pl-word span"), { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.06 }, 0.3)
      .to(state, {
        v: 100, duration: 1.7, ease: "power2.inOut",
        onUpdate: () => { if (counter) counter.textContent = String(Math.round(state.v)).padStart(3, "0"); },
      }, 0)
      .to(el.querySelector(".pl-bar i"), { scaleX: 1, duration: 1.7, ease: "power2.inOut" }, 0)
      .to(el.querySelector(".pl-inner"), { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, 1.85)
      .add(() => heroReady.resolve(), 2.05)
      .to(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut" }, 2.0);

    return () => { tl.kill(); document.body.classList.remove("is-loading"); };
  }, []);

  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="pl-inner">
        <div className="pl-mark-wrap">
          <svg className="pl-mark" width="80" height="94" viewBox="0 0 86 100">
            <rect className="draw" x="0.8" y="0.8" width="22" height="98.4" rx="1.6" fill="none" stroke="#33C27A" strokeWidth="1.2" pathLength={1} />
            <rect className="draw" x="63.2" y="0.8" width="22" height="98.4" rx="1.6" fill="none" stroke="#33C27A" strokeWidth="1.2" pathLength={1} />
            <circle className="draw" cx="42.5" cy="52" r="36.8" fill="none" stroke="#33C27A" strokeWidth="1.2" pathLength={1} />
            <path className="draw" d="M 24.5 44.6 H 79.3 M 24.5 57 H 79.7" stroke="#fff" strokeWidth="1.2" fill="none" pathLength={1} />
          </svg>
          <span className="fill"><LogoMark size={94} /></span>
        </div>
        <div className="pl-word">
          <span>HYDRO</span> <span>ENVIRONMENTAL</span>
        </div>
        <div className="pl-tag">Engineering reliability in every process</div>
      </div>
      <div className="pl-foot">
        <span className="pl-bar"><i /></span>
        <span className="pl-count">000</span>
      </div>
    </div>
  );
}
