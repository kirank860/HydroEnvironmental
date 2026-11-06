import { serviceRibbon } from "@/lib/content";

function Drop() {
  return (
    <svg className="rb-drop" width="18" height="24" viewBox="0 0 28 38" fill="none" aria-hidden="true">
      <path d="M14 1C20 10 27 18 27 25a13 13 0 0 1-26 0C1 18 8 10 14 1z" fill="currentColor" />
    </svg>
  );
}

// Services ribbon right after the hero: two infinite rows moving in opposite
// directions (serif + outline), speeds up with scroll velocity (Motion.tsx).
export default function ServiceRibbon() {
  const row = (variant: "solid" | "outline", hidden: boolean) => (
    <div className="rb-set" aria-hidden={hidden || undefined}>
      {serviceRibbon.map((s) => (
        <a key={s.label} href={s.href} className={`rb-item ${variant}`} tabIndex={hidden ? -1 : undefined}>
          <span>{s.label}</span>
          <Drop />
        </a>
      ))}
    </div>
  );

  return (
    <section className="ribbon" aria-label="Our services">
      <div className="rb-head wrap">
        <span className="label aqua">What we deliver</span>
        <span className="rb-note">Water &amp; wastewater solutions across the UAE</span>
      </div>
      <div className="rb-track rb-a">
        <div className="rb-move">{row("solid", false)}{row("solid", true)}</div>
      </div>
      <div className="rb-track rb-b" aria-hidden="true">
        <div className="rb-move">{row("outline", true)}{row("outline", true)}</div>
      </div>
    </section>
  );
}
