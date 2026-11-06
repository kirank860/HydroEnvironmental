"use client";

import { useEffect, useRef } from "react";

/**
 * Hero atmosphere:
 *  - canvas of slowly rising micro-bubbles / light particles (water feel)
 *  - pointer parallax on the background and headline (desktop only)
 * Pauses when the hero is off-screen. Off for ?figma / ?static and reduced motion.
 */
export default function HeroFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.closest(".hero") as HTMLElement | null;
    if (!canvas || !hero) return;
    const params = new URLSearchParams(window.location.search);
    if (params.has("figma") || params.has("static") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvas.style.display = "none";
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, raf = 0, visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; r: number; vy: number; drift: number; phase: number; a: number; hue: 0 | 1 };
    let parts: P[] = [];

    const make = (randomY: boolean): P => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 20,
      r: Math.random() < 0.85 ? 0.6 + Math.random() * 1.6 : 2.5 + Math.random() * 3.5,
      vy: 0.15 + Math.random() * 0.55,
      drift: 0.3 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      a: 0.15 + Math.random() * 0.45,
      hue: Math.random() < 0.3 ? 1 : 0,
    });

    const resize = () => {
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, (w * h) / 14000));
      parts = Array.from({ length: count }, () => make(true));
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || window.scrollY > window.innerHeight * 0.6) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.vy;
        const x = p.x + Math.sin(t / 1600 + p.phase) * p.drift * 6;
        if (p.y < -20) Object.assign(p, make(false));
        const fade = Math.min(1, (h - p.y) / 200) * Math.min(1, p.y / 160);
        ctx.beginPath();
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
        if (p.r > 2.4) {
          ctx.strokeStyle = p.hue ? `rgba(91,180,228,${p.a * fade * 0.7})` : `rgba(255,255,255,${p.a * fade * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          ctx.fillStyle = p.hue ? `rgba(51,194,122,${p.a * fade})` : `rgba(220,240,255,${p.a * fade})`;
          ctx.fill();
        }
      }
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(hero);
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    // Pointer parallax (fine pointers only)
    const bg = hero.querySelector<HTMLElement>(".hero-par");
    const copy = hero.querySelector<HTMLElement>(".hero-parallax");
    let tx = 0, ty = 0, cx = 0, cy = 0, praf = 0;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const loop = () => {
      praf = requestAnimationFrame(loop);
      if (!visible || window.scrollY > window.innerHeight * 0.6) return;
      cx += (tx - cx) * 0.05; cy += (ty - cy) * 0.05;
      if (bg) bg.style.transform = `translate3d(${cx * -18}px, ${cy * -12}px, 0)`;
      if (copy) copy.style.transform = `translate3d(${cx * 8}px, ${cy * 5}px, 0)`;
    };
    if (fine) { window.addEventListener("pointermove", onMove); praf = requestAnimationFrame(loop); }

    return () => {
      cancelAnimationFrame(raf); cancelAnimationFrame(praf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas className="hero-fx" ref={canvasRef} aria-hidden="true" />;
}
