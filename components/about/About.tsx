import { company, strategy, whyHydro } from "@/lib/content";

// About page sections (hero and marquee are shared: PageHero / ClientMarquee). Motion lives in <PageMotion />;
// without JS or with reduced motion every section renders as a normal static layout.

export function AboutStatement() {
  const words = company.positioning.split(" ");
  return (
    <section data-tone="light" className="ab-statement" id="statement">
      <div className="wrap">
        <span className="label green rv">Our position</span>
        <p className="serif ab-words" aria-label={company.positioning}>
          {words.map((w, i) => <span aria-hidden="true" key={i}>{w} </span>)}
        </p>
        <div className="ab-statement-foot rv">
          <p>
            Since {company.established}, Hydro has focused on engineering-led solutions where chemical knowledge,
            mechanical execution, fluid movement, testing, commissioning and equipment readiness meet.
          </p>
          <p>
            We study the system, understand the process risk, select the correct equipment, execute with control,
            validate performance and support the system through commissioning and operation.
          </p>
        </div>
      </div>
    </section>
  );
}

const stageText: Record<string, string> = {
  Engineer: "Drawings, pressures, materials, contamination risk and acceptance criteria reviewed first.",
  Assemble: "Pump, filtration, tank and power packages sized and built in-house.",
  Execute: "Flushing, cleaning and chemical treatment under supervision and hold points.",
  Test: "Pressure, leak and water-quality testing — measured, not assumed.",
  Commission: "Start-up support with complete records for acceptance.",
  Optimize: "Chemistry, filtration and balancing adjusted for performance.",
  Maintain: "Follow-up maintenance and support into reliable operation.",
};

export function AboutModel() {
  return (
    <section className="ab-model" id="model">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label aqua">Lifecycle delivery model</span>
            <h2 className="serif">One team from first drawing to reliable operation.</h2>
          </div>
          <p>Seven stages, one accountable partner. Every stage is planned, documented and validated before the next begins.</p>
        </div>
        <ol className="ab-track" aria-label="Lifecycle delivery model">
          <span className="ab-rail" aria-hidden="true"><span className="ab-fill" /></span>
          {company.deliveryModel.map((m, i) => (
            <li className="ab-stage" key={m}>
              <span className="ab-node" aria-hidden="true" />
              <small>{String(i + 1).padStart(2, "0")}</small>
              <h3 className="serif">{m}</h3>
              <p>{stageText[m]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutPillars() {
  return (
    <section data-tone="light" className="ab-pillars" id="company">
      <div className="wrap ab-pillars-grid">
        <div className="ab-pillars-head">
          <span className="label green">What we stand for</span>
          <h2 className="serif">Built on one belief: critical systems must work from day one.</h2>
          <p className="ab-motto serif" data-speed="0.35">“Trial and No Error.”</p>
        </div>
        <div className="ab-pillar-list">
          {strategy.map((s, i) => (
            <article className="ab-pillar rv" key={s.k}>
              <span className="ab-pillar-n serif" data-speed="0.15">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="serif">{s.k}</h3>
                <p>{s.v}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Line icons (24px grid, 1.5 stroke), one per Why Hydro item, in content order.
const icons: React.ReactNode[] = [
  <><path d="M9 3h6" /><path d="M10 3v6.2L4.6 18.4A1.7 1.7 0 0 0 6.1 21h11.8a1.7 1.7 0 0 0 1.5-2.6L14 9.2V3" /><path d="M7.5 15h9" /></>,
  <><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7" /><path d="M20 4v4.7h-4.7" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.3" /><path d="M4 20v-4.7h4.7" /></>,
  <><path d="M12 2v20" /><path d="M4.2 7l15.6 10" /><path d="M19.8 7 4.2 17" /><path d="m9 4 3 2 3-2" /><path d="m9 20 3-2 3 2" /></>,
  <><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="m3 8 9 5 9-5" /><path d="M12 13v8" /></>,
  <><path d="M12 14l3.5-3.5" /><path d="M3.3 17a9 9 0 1 1 17.4 0" /><circle cx="12" cy="14" r="1.6" /></>,
  <><path d="M14.7 6.3a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z" /><path d="M14.7 6.3 17 4l3 3-2.3 2.3" /><path d="m5 21-2-2 4-4" /></>,
  <><path d="M3 6h11v10H3z" /><path d="M14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  <><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
];

export function AboutWhy() {
  return (
    <section className="ab-why" id="why">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label aqua">Why Hydro</span>
            <h2 className="serif">Engineering, equipment, chemistry and execution — in one solution.</h2>
          </div>
          <p>Not a generic contractor, not a simple rental company, not only flushing — a specialist partner accountable for system readiness.</p>
        </div>
        <div className="ab-why-grid">
          {whyHydro.map((w, i) => (
            <article className="ab-card fx-card" key={w.title}>
              <div className="ab-card-top">
                <svg className="ab-ico" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[i]}</svg>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="serif">{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
