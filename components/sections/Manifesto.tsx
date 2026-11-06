import { manifesto } from "@/lib/content";

// Engineering line art (pipework, valve, flow) — draws itself on scroll (see Motion.tsx)
export function PipeArt({ className }: { className: string }) {
  return (
    <svg className={`m-art ${className}`} viewBox="0 0 420 300" fill="none" aria-hidden="true">
      <path className="draw" d="M0 70H150a30 30 0 0 1 30 30v40a30 30 0 0 0 30 30H420" />
      <path className="draw" d="M0 92H150a8 8 0 0 1 8 8v40a52 52 0 0 0 52 52H420" />
      <rect className="draw" x="250" y="150" width="56" height="64" rx="4" />
      <path className="draw" d="M278 150v-34M258 116h40M270 108h16" />
      <circle className="draw" cx="278" cy="182" r="14" />
      <path className="draw" d="M60 70V40M52 40h16M110 92v40M102 132h16" />
      <path className="draw dash" d="M330 160h36M356 152l10 8-10 8" />
      <path className="draw dash" d="M20 60h36M46 52l10 8-10 8" />
      <circle className="draw" cx="380" cy="250" r="22" />
      <circle className="draw" cx="380" cy="250" r="10" />
      <path className="draw" d="M380 228v-36" />
      <text x="232" y="238" className="m-art-label">VALVE · V-01</text>
      <text x="8" y="120" className="m-art-label">FEED LINE Ø100</text>
    </svg>
  );
}

export function DropArt({ className }: { className: string }) {
  return (
    <svg className={`m-art ${className}`} viewBox="0 0 360 260" fill="none" aria-hidden="true">
      <path className="draw" d="M120 30c22 30 44 54 44 78a44 44 0 0 1-88 0c0-24 22-48 44-78z" />
      <path className="draw" d="M98 112a22 22 0 0 0 20 20" />
      <path className="draw" d="M0 200c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0" />
      <path className="draw" d="M0 226c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0" />
      <path className="draw" d="M220 60h110v70H220zM220 85h110M245 60v70M300 60v70" />
      <text x="222" y="150" className="m-art-label">MBR · RO · UF</text>
      <text x="40" y="180" className="m-art-label">TREATED WATER → REUSE</text>
    </svg>
  );
}

export default function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="m-grid" aria-hidden="true" />
      <div className="ghost">HYDRO</div>
      <div className="m-rings" aria-hidden="true"><i /><i /><i /><i /></div>
      <PipeArt className="tl" />
      <DropArt className="br" />

      <ol className="m-index" aria-hidden="true">
        {manifesto.map((m, i) => (
          <li key={m.step} className={i === 0 ? "on" : undefined}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {m.step}
          </li>
        ))}
      </ol>

      <div className="m-cards" aria-hidden="true">
        {manifesto.map((m, i) => (
          <figure className={`m-card${i === 0 ? " on" : ""}`} key={m.step}>
            <div className="m-card-img" style={{ backgroundImage: `url("${m.image}")` }} />
            <figcaption><span>{String(i + 1).padStart(2, "0")} / {String(manifesto.length).padStart(2, "0")}</span>{m.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="m-stage">
        {manifesto.map((m, i) => (
          <div className={`m-group${i === 0 ? " on" : ""}`} key={i}>
            {i === 0 && (
              <svg className="drop" width="28" height="38" viewBox="0 0 28 38" fill="none" aria-hidden="true">
                <path d="M14 1C20 10 27 18 27 25a13 13 0 0 1-26 0C1 18 8 10 14 1z" stroke="#1F497D" strokeWidth="1.2" />
                <path d="M8 26a6 6 0 0 0 5 6" stroke="#00A654" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            )}
            <span className="label green m-kicker">{String(i + 1).padStart(2, "0")} — {m.step}</span>
            <h2 className="serif">
              {m.lines.map((l) => (
                <span key={l}>{l}<br /></span>
              ))}
              <span className="g">{m.accent}</span>
            </h2>
            {"label" in m && m.label && <span className="label green m-label">{m.label}</span>}
          </div>
        ))}
      </div>
      <div className="m-progress">
        {manifesto.map((_, i) => <i key={i} className={i === 0 ? "on" : undefined} />)}
      </div>
    </section>
  );
}
