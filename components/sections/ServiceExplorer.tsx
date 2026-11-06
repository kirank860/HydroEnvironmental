"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { serviceExplorer } from "@/lib/content";

const AUTOPLAY_MS = 4500;

// Right after the hero: numbered service list + crossfading image card.
// Auto-advances (with a progress line) until the visitor hovers / focuses a service.
export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || !visible || reduce) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % serviceExplorer.length), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [active, paused, visible]);

  const current = serviceExplorer[active];
  const running = visible && !paused;

  return (
    <section className="explorer" id="services" ref={ref} aria-label="Our services">
      <div className="wrap">
        <div className="ex-head">
          <div>
            <span className="label aqua">What we deliver</span>
            <h2 className="serif">Complete water solutions, <em>under one roof.</em></h2>
          </div>
          <div>
            <p>Treatment systems, equipment, chemicals and technical services for projects and facilities across the UAE.</p>
            <Link className="ex-all" href="/solutions">View all solutions →</Link>
          </div>
        </div>

        <div className="ex-grid">
          <ol className="ex-list" onMouseLeave={() => setPaused(false)}>
            {serviceExplorer.map((s, i) => (
              <li key={s.title} className={i === active ? "on" : undefined}>
                <a
                  href={s.href}
                  onMouseEnter={() => { setActive(i); setPaused(true); }}
                  onFocus={() => { setActive(i); setPaused(true); }}
                  onBlur={() => setPaused(false)}
                >
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t serif">{s.title}</span>
                  <span className="go" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="bar" aria-hidden="true">
                    <i key={`${active}-${running}`} className={i === active && running ? "run" : i === active ? "full" : ""} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="ex-card" aria-live="polite">
            {serviceExplorer.map((s, i) => (
              <div key={s.title} className={`ex-img${i === active ? " on" : ""}`} style={{ backgroundImage: `url("${s.image}")` }} role="img" aria-label={`${s.title} — illustrative photo`} />
            ))}
            <div className="ex-shade" aria-hidden="true" />
            <div className="ex-count" aria-hidden="true">
              <b>{String(active + 1).padStart(2, "0")}</b> / {String(serviceExplorer.length).padStart(2, "0")}
            </div>
            <div className="ex-info" key={active}>
              <h3 className="serif">{current.title}</h3>
              <p>{current.text}</p>
              <a className="ex-link" href={current.href}>Explore service <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
