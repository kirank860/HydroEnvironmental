"use client";

import { useEffect, useRef } from "react";

/**
 * WebGL water surface for the hero image.
 * - The pointer leaves expanding ripples that bend the photo like water.
 * - A gentle always-on wobble + slow zoom keeps it alive when idle.
 * Falls back silently to the CSS background if WebGL or the image (CORS) fails,
 * on touch/coarse pointers, reduced motion, and ?figma / ?static.
 */
const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main(){ vUv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uRes;      // canvas size (px)
uniform vec2 uImg;      // image size (px)
uniform float uTime;
uniform vec3 uDrops[12]; // x, y (0-1, canvas space), birth time
void main(){
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;
  vec2 offset = vec2(0.0);

  // pointer ripples
  for (int i = 0; i < 12; i++) {
    vec3 d = uDrops[i];
    float age = uTime - d.z;
    if (d.z <= 0.0 || age > 2.6) continue;
    vec2 dir = uv - d.xy;
    dir.x *= aspect;
    float dist = length(dir);
    float radius = age * 0.42;
    float band = exp(-pow((dist - radius) * 14.0, 2.0));
    float wave = sin((dist - radius) * 60.0) * band;
    float fade = (1.0 - age / 2.6);
    offset += normalize(dir + 1e-4) * wave * 0.012 * fade * fade;
  }

  // idle water wobble
  offset += vec2(
    sin(uv.y * 9.0 + uTime * 0.7) * 0.0018,
    cos(uv.x * 7.0 + uTime * 0.55) * 0.0018
  );

  // background-size: cover + slow zoom
  float zoom = 1.06 + 0.04 * sin(uTime * 0.05);
  vec2 s = uRes / uImg;
  float scale = max(s.x, s.y);
  vec2 fit = uRes / (uImg * scale);
  vec2 tuv = (uv + offset - 0.5) * fit / zoom + 0.5;
  tuv.y = 1.0 - tuv.y;

  vec3 col = texture2D(uTex, tuv).rgb;
  // subtle highlight on ripple crests
  float glint = length(offset) * 18.0;
  col += vec3(0.55, 0.8, 1.0) * glint * 0.35;
  gl_FragColor = vec4(col, 1.0);
}`;

export default function HeroRipple({ src }: { src: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const hero = canvas?.closest(".hero") as HTMLElement | null;
    if (!canvas || !hero) return;
    const params = new URLSearchParams(window.location.search);
    if (
      params.has("figma") || params.has("static") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) return;

    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, code: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, code);
      gl.compileShader(sh);
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("uRes"), uImg = u("uImg"), uTime = u("uTime"), uDrops = u("uDrops");
    const drops = new Float32Array(36);
    let dropIdx = 0;

    let raf = 0, visible = true, ready = false, imgW = 1, imgH = 1;
    const start = performance.now();
    const now = () => (performance.now() - start) / 1000;
    const dpr = 1; // full-screen shader: 1x is visually identical behind the dark overlay and ~2x cheaper

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const tex = gl.createTexture();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      } catch { return; } // tainted (CORS) → keep CSS background
      imgW = img.naturalWidth; imgH = img.naturalHeight;
      ready = true;
      canvas.classList.add("on");
    };
    img.src = src;

    let last = 0, lx = -1, ly = -1;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = 1 - (e.clientY - r.top) / r.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return;
      const t = now();
      const moved = Math.hypot(x - lx, y - ly);
      if (t - last < 0.07 && moved < 0.04) return;
      last = t; lx = x; ly = y;
      drops.set([x, y, t], dropIdx * 3);
      dropIdx = (dropIdx + 1) % 12;
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!ready || !visible || window.scrollY > window.innerHeight * 0.6) return;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uImg, imgW, imgH);
      gl.uniform1f(uTime, now());
      gl.uniform3fv(uDrops, drops);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(hero);
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [src]);

  return <canvas className="hero-ripple" ref={ref} aria-hidden="true" />;
}
