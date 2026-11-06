import Link from "next/link";
import { DropArt, PipeArt } from "@/components/sections/Manifesto";
import { chapters, company } from "@/lib/content";
import { band, everySystem, feature, places, reach, steps } from "@/lib/landing";

/* ---------------- 03 · Every system (pinned line swap) ---------------- */
export function EverySystem() {
  return (
    <section data-tone="light" className="ev" id="every">
      <div className="ev-ghost" aria-hidden="true">HYDRO</div>
      <PipeArt className="ev-art tr" />
      <DropArt className="ev-art bl" />
      <div className="ev-inner">
        <svg className="ev-drop" width="26" height="36" viewBox="0 0 28 38" fill="none" aria-hidden="true">
          <path d="M14 1C20 10 27 18 27 25a13 13 0 0 1-26 0C1 18 8 10 14 1z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 26a6 6 0 0 0 5 6" stroke="#00A654" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <h2 className="serif ev-title">{everySystem.title}</h2>
        <div className="ev-lines">
          {everySystem.groups.map((g, i) => (
            <p className={`serif ev-g${g.small ? " sm" : ""}${i === 0 ? " on" : ""}`} key={i}>
              {g.lines.map((l) => <span key={l}>{l}</span>)}
              {g.accent && <em>{g.accent}</em>}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 04 · Journey (horizontal chapters) ---------------- */
export function Journey() {
  return (
    <section className="jr" aria-label="Engineering methodology">
      <div className="jr-glow" aria-hidden="true" />
      <div className="jr-track">
        {chapters.map((c, i) => (
          <article className={`jr-ch${i % 2 ? " flip" : ""}`} key={c.n}>
            <div className="jr-text">
              <span className="jr-kick">Stage {c.n}</span>
              <h3 className="serif">{c.title}</h3>
              <p>{c.text}</p>
              <span className="jr-tag">{c.tag}</span>
            </div>
            <div className="jr-card">
              <div className="jr-img" style={{ backgroundImage: `url("${c.image}")` }} role="img" aria-label={`${c.title} — illustrative photo`} />
            </div>
          </article>
        ))}
        <div className="jr-end"><span>Trial and no error.</span></div>
      </div>
      <div className="jr-dashes" aria-hidden="true">
        {chapters.map((c, i) => <i key={c.n} className={i === 0 ? "on" : undefined} />)}
      </div>
    </section>
  );
}

/* ---------------- 05 · Feature (product-style) ---------------- */
export function Feature() {
  return (
    <section data-tone="light" className="ft" id="solutions">
      <div className="wrap ft-grid">
        <div className="ft-text">
          <span className="ft-label">{feature.label}</span>
          <h2 className="serif">{feature.title.map((l) => <span className="ft-line" key={l}><span>{l}</span></span>)}</h2>
          <p className="ft-p">{feature.text}</p>
          <div className="ft-actions">
            <Link className="btn btn-solid" href="/solutions" data-magnetic>Explore divisions <span className="arr">→</span></Link>
            <Link className="btn btn-ghost" href="/contact">Contact us</Link>
          </div>
        </div>
        <div className="ft-visual" aria-hidden="true">
          <div className="ft-halo" />
          <svg className="ft-drop" viewBox="0 0 200 260">
            <defs>
              <clipPath id="ftDropClip"><path d="M100 4C130 52 192 104 192 164a92 92 0 0 1-184 0C8 104 70 52 100 4z" /></clipPath>
              <linearGradient id="ftShine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset=".45" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <image href={feature.image} x="-60" y="0" width="320" height="260" preserveAspectRatio="xMidYMid slice" clipPath="url(#ftDropClip)" />
            <path d="M100 4C130 52 192 104 192 164a92 92 0 0 1-184 0C8 104 70 52 100 4z" fill="url(#ftShine)" stroke="rgba(255,255,255,.7)" strokeWidth="1.2" />
            <path d="M46 170a52 52 0 0 0 34 44" stroke="#fff" strokeOpacity=".8" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <i className="ft-orb o1" /><i className="ft-orb o2" /><i className="ft-orb o3" /><i className="ft-orb o4" />
          <span className="ft-chip c1">{feature.chips[0]}</span>
          <span className="ft-chip c2">{feature.chips[1]}</span>
          <div className="ft-shadow" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 06 · Band ---------------- */
export function Band() {
  return (
    <section className="bd">
      <div className="wrap">
        <span className="bd-label">{band.label}</span>
        <h2 className="bd-title">
          {band.lines.map((l) => <span className="bd-line" key={l}><span>{l}</span></span>)}
          <span className="bd-line acc"><span>{band.accent}</span></span>
        </h2>
        <p className="bd-p">{band.text}</p>
      </div>
    </section>
  );
}

/* ---------------- 07 · Stacked steps ---------------- */
const icons = [
  <path key="a" d="M12 3c3 4 6 7 6 10a6 6 0 0 1-12 0c0-3 3-6 6-10zM4 21h16" />,
  <path key="b" d="M6 20V9h8v11M10 9V5h6v4M14 13h4v7M4 20h16M8 13h4" />,
  <path key="c" d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 14h9" />,
  <path key="d" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
];

export function Steps() {
  return (
    <section data-tone="light" className="st">
      <div className="wrap">
        <div className="st-head">
          <span className="st-label">What we deliver</span>
          <h2 className="serif">Every system. <em>Engineered.</em></h2>
        </div>
        <div className="st-stack">
          {steps.map((s, i) => (
            <article className="st-card" key={s.n} style={{ ["--i" as string]: i }}>
              <div className="st-body">
                <span className="st-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{icons[i]}</svg>
                </span>
                <span className="st-step">Division {s.n}</span>
                <h3 className="serif">{s.title}</h3>
                <p>{s.text}</p>
                <Link className="st-more" href={s.href}>Explore {s.chip.toLowerCase()} →</Link>
                <span className="st-num serif" aria-hidden="true">{s.n}</span>
              </div>
              <div className="st-media">
                <div className="st-img" style={{ backgroundImage: `url("${s.image}")` }} role="img" aria-label={`${s.chip} — illustrative photo`} />
                <span className="st-chip">{s.n} | {s.chip}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 08 · Where we work (winding path) ---------------- */
export function Places() {
  return (
    <section data-tone="light" className="pl-sec" id="projects">
      <div className="wrap">
        <div className="st-head">
          <span className="st-label">Where we work</span>
          <h2 className="serif">Reliable systems, <em>every sector.</em></h2>
        </div>
        <div className="pl-rows">
          <svg className="pl-path" aria-hidden="true"><path className="base" /><path className="draw" /><circle className="dot" r="6" /></svg>
          {places.map((p, i) => (
            <article className={`pl-row${i % 2 ? " flip" : ""}`} key={p.kicker}>
              <div className="pl-media">
                <div className="pl-img" style={{ backgroundImage: `url("${p.image}")` }} role="img" aria-label={`${p.kicker} — illustrative photo`} />
                <span className="pl-chip">{p.chip}</span>
              </div>
              <div className="pl-text">
                <span className="pl-kick">{p.kicker}</span>
                <h3 className="serif">{p.title}</h3>
                <p>{p.text}</p>
              </div>
              <i className="pl-node" aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="pl-foot"><Link className="btn btn-dark" href="/projects">View our projects →</Link></div>
      </div>
    </section>
  );
}

/* ---------------- 09 · Reach us ---------------- */
export function Reach() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(reach.mapQuery)}`;
  return (
    <section className="rc" id="contact">
      <div className="rc-glow" aria-hidden="true" />
      <div className="wrap">
        <span className="rc-label">{reach.label}</span>
        <h2 className="serif rc-title">{reach.title} <em>{reach.accent}</em></h2>
        <p className="rc-p">{reach.text}</p>
        <div className="rc-actions">
          <Link className="btn rc-btn-light" href="/contact" data-magnetic>Contact us <span className="arr">→</span></Link>
          <a className="btn rc-btn-green" href={company.phoneHref}>Call {company.phone}</a>
        </div>
        <div className="rc-grid">
          <div className="rc-cards">
            <div className="rc-card big">
              <span className="rc-ic" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
              <h3 className="serif">Our office</h3>
              <p>{company.location.join(", ")}</p>
              <div className="rc-card-foot"><span>Location</span><a href={maps} target="_blank" rel="noopener noreferrer">Navigate ↗</a></div>
            </div>
            <a className="rc-card" href={company.phoneHref}>
              <span className="rc-k">Call us</span><b>{company.phone}</b>
            </a>
            <a className="rc-card" href={`mailto:${company.email}`}>
              <span className="rc-k">Email us</span><b>{company.email}</b>
            </a>
            <div className="rc-card">
              <span className="rc-k">Part of</span><b>{company.group}</b>
            </div>
          </div>
          <div className="rc-map">
            <iframe
              title="HEES office location — Al Sajaa Industrial Area, Sharjah"
              src={`https://www.google.com/maps?q=${encodeURIComponent(reach.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
