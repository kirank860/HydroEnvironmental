"use client";

import { useEffect } from "react";

/**
 * Magnetic buttons: elements with data-magnetic are gently pulled toward the
 * pointer and spring back on leave. Fine pointers only; off for reduced motion
 * and ?figma / ?static.
 */
export default function Magnetic() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      params.has("figma") || params.has("static") ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    let magnet: HTMLElement | null = null;

    const onOver = (e: PointerEvent) => {
      const m = (e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
      if (m === magnet) return;
      if (magnet) { magnet.style.transform = ""; magnet.classList.remove("magnet-on"); }
      magnet = m;
      magnet?.classList.add("magnet-on");
    };

    const onMove = (e: PointerEvent) => {
      if (!magnet) return;
      const r = magnet.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      magnet.style.transform = `translate(${dx * 0.28}px, ${dy * 0.38}px)`;
    };

    document.addEventListener("pointerover", onOver);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointermove", onMove);
      if (magnet) magnet.style.transform = "";
    };
  }, []);

  return null;
}
