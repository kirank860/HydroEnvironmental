"use client";

import { useEffect, useRef } from "react";

/**
 * Premium cursor: a small dot + a trailing green ring.
 * - Over links/buttons the ring grows; elements with data-cursor="Label" show that label inside it.
 * - Elements with data-magnetic are gently pulled toward the pointer.
 * Only on fine pointers (mouse/trackpad); off for reduced motion and ?figma / ?static.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current, ring = ringRef.current, label = labelRef.current;
    if (!dot || !ring || !label) return;
    const params = new URLSearchParams(window.location.search);
    if (
      params.has("figma") || params.has("static") ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0;
    let magnet: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
      root.classList.add("cursor-in");
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        magnet.style.transform = `translate(${dx * 0.28}px, ${dy * 0.38}px)`;
      }
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const target = t.closest<HTMLElement>("a, button, [data-cursor]");
      const text = target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? "";
      ring.classList.toggle("hover", !!target);
      ring.classList.toggle("labeled", !!text);
      label.textContent = text;

      const m = t.closest<HTMLElement>("[data-magnetic]");
      if (m !== magnet) {
        if (magnet) { magnet.style.transform = ""; magnet.classList.remove("magnet-on"); }
        magnet = m;
        magnet?.classList.add("magnet-on");
      }
    };

    const onLeaveWindow = () => root.classList.remove("cursor-in");
    const onDown = () => ring.classList.add("down");
    const onUp = () => ring.classList.remove("down");

    const loop = () => {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      raf = Math.abs(mx - rx) + Math.abs(my - ry) > 0.2 ? requestAnimationFrame(loop) : 0;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (magnet) magnet.style.transform = "";
      root.classList.remove("has-cursor", "cursor-in");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"><span ref={labelRef} /></div>
    </>
  );
}
