import { Fragment } from "react";
import Link from "next/link";
import { capabilities, chemicalFunctions, chemicalGroups, clients, company, ctaImage, documents, environments, facilities, groupFleet, groupReferences, groupStats, productRanges, qhse, references, strategy, whyHydro } from "@/lib/content";

export function Capabilities() {
  return (
    <section data-tone="light" className="caps" id="solutions">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">Eight core divisions</span>
            <h2 className="serif">One chem-mechanical partner for every critical system.</h2>
          </div>
          <p>Engineering, chemistry, equipment and execution — from pipeline pre-commissioning and district cooling to factory utilities, industrial cleaning and engineered rental.</p>
        </div>
        <div className="cap-grid">
          {capabilities.map((c) => (
            <div className="cap rv" id={c.id} key={c.n}>
              <span className="num">{c.n}</span>
              <h3 className="serif">{c.title}</h3>
              <p>{c.text}</p>
              <ul className="cap-items">{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <a className="more" href={c.href}>Explore division →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function References({ full = false }: { full?: boolean }) {
  const recent = references.filter((r) => !r.historic);
  const rows = full ? recent : recent.slice(0, 4);
  const historic = references.filter((r) => r.historic);
  return (
    <section className="refs" id="projects">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label aqua">Selected references</span>
            <h2 className="serif">Hydro references across the UAE since 2008.</h2>
          </div>
          <p>A selection from Hydro&apos;s own reference list, shown with the exact HEES scope and contracting relationship.</p>
        </div>
        {rows.map((r, i) => (
          <div className={`ref-row rv${i === rows.length - 1 ? " last" : ""}`} key={r.name}>
            <h3 className="serif">{r.name}</h3>
            <dl><dt>HEES scope</dt><dd>{r.scope}</dd></dl>
            <dl><dt>{r.relLabel}</dt><dd>{r.rel}</dd></dl>
            <span className="arrow" aria-hidden="true">→</span>
          </div>
        ))}
        {full && (
          <div className="hist rv">
            <h3 className="serif">Historic references <small>2008 – 2013</small></h3>
            <ul>
              {historic.map((r) => (
                <li key={r.name}><span className="yr">{r.year}</span><b>{r.name}</b><span>{r.scope}</span><span>{r.relLabel}: {r.rel}</span></li>
              ))}
            </ul>
          </div>
        )}
        <div className="clients rv" aria-label="Organisations we have worked with">
          <span className="label">Worked with</span>
          <ul>{clients.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="ref-foot rv">
          <span>Projects are shown with HEES&apos;s specific scope only.</span>
          {full ? <a className="btn btn-line" href="#contact">Discuss a project</a> : <a className="btn btn-line" href="/projects">View all projects →</a>}
        </div>
      </div>
    </section>
  );
}

export function Environments() {
  return (
    <section data-tone="light" className="envs">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">Where we work</span>
            <h2 className="serif">Shaped around the environments we serve.</h2>
          </div>
          <p>Water systems for buildings, facilities and industry across the UAE.</p>
        </div>
        <div className="env-list">
          {environments.map((e) => (
            <div className="env rv" key={e.n}>
              <span className="num">{e.n}</span>
              <h3 className="serif">{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section className="products" id="products">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label aqua">Equipment</span>
            <h2 className="serif">Project-ready equipment and chemistry.</h2>
          </div>
          <p>Selected, assembled and supported in-house — for sale, rental or as part of a Hydro execution package.</p>
        </div>
        <div className="prod-grid">
          {productRanges.map((p) => (
            <a className="prod rv" href={`/products/${p.id}`} key={p.n}>
              <div className="prod-media">
                <div className="photo" style={{ backgroundImage: `url("${p.image}")` }} role="img" aria-label={`${p.title} — illustrative photo`} />
              </div>
              <div className="prod-body">
                <span className="label aqua">Category {p.n}</span>
                <h3 className="serif">{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <span className="link-aqua">{p.link} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChemicalCatalogue({ title = "Water treatment chemicals supplied" }: { title?: string }) {
  return (
    <section className="products chem-sec" id="chemical-range">
      <div className="wrap">
        <div className="chem rv" id="chemical-range">
          <div className="chem-head">
            <h2 className="serif">{title}</h2>
            <p>INDION treatment codes from Ion Exchange (India) Ltd by application. Ask for TDS / SDS or a recommendation for your system.</p>
          </div>
          <div className="chem-grid">
            {chemicalGroups.map((g) => (
              <div className="chem-col" key={g.title}>
                <h4>{g.title}</h4>
                <ul>{g.items.map(([code, d]) => <li key={code}><b>{code}</b><span>{d}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Company() {
  return (
    <section data-tone="light" className="company" id="company">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">About HEES</span>
            <h2 className="serif">Built on one belief: critical systems must work from day one.</h2>
          </div>
          <p>
            Since {company.established}, Hydro has focused on engineering-led solutions where chemical knowledge, mechanical
            execution, fluid movement, testing, commissioning and equipment readiness meet. We study the system, understand
            the process risk, select the correct equipment, execute with control, validate performance and support the
            system through commissioning and operation.
          </p>
        </div>
        <ol className="model rv" aria-label="Lifecycle delivery model">
          {company.deliveryModel.map((m, i) => <li key={m}><span>{String(i + 1).padStart(2, "0")}</span>{m}</li>)}
        </ol>
        <div className="strat">
          {strategy.map((x) => (
            <div className="strat-item rv" key={x.k}>
              <h3 className="serif">{x.k}</h3>
              <p>{x.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyHydro() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label aqua">Why Hydro</span>
            <h2 className="serif">Engineering, equipment, chemistry and execution — in one solution.</h2>
          </div>
          <p>Not a generic contractor, not a simple rental company, not only flushing — a specialist partner accountable for system readiness.</p>
        </div>
        <div className="why-grid">
          {whyHydro.map((w, i) => (
            <div className="why-item rv" key={w.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif">{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  return (
    <section data-tone="light" className="company fac" id="facilities">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">Facilities &amp; QHSE</span>
            <h2 className="serif">In-house capability. Disciplined HSE.</h2>
          </div>
          <p>Practical facilities and technical resources for equipment readiness, assembly, fabrication, chemical handling and rapid mobilization — under planned, documented quality and safety control.</p>
        </div>
        <ul className="cap-items fac-list rv">{facilities.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="strat">
          {qhse.map((q) => (
            <div className="strat-item rv" key={q.title}>
              <h3 className="serif">{q.title}</h3>
              <ul className="cap-items">{q.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GroupExperience({ limit }: { limit?: number }) {
  const rows = limit ? groupReferences.slice(0, limit) : groupReferences;
  return (
    <section data-tone="light" className="company grp" id="group">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">Island Tower Group experience</span>
            <h2 className="serif">Backed by two decades of group flushing work.</h2>
          </div>
          <p>
            Hydro is part of {company.group}. Our sister company, Island Tower Electromechanical Works LLC, has flushed
            chilled and condenser water systems on landmark UAE projects since 2003. The projects below are group
            experience, not Hydro contracts.
          </p>
        </div>
        <div className="grp-stats rv">
          {groupStats.map((g) => <div key={g.k}><b className="serif">{g.v}</b><span>{g.k}</span></div>)}
        </div>
        <ul className="grp-list rv">
          {rows.map((r) => <li key={r.name}><b>{r.name}</b><span>{r.scope}</span><small>{r.sector}</small></li>)}
        </ul>
        <p className="grp-note rv">Source: Island Tower Electromechanical Works LLC flushing reference list. Shown as group experience.</p>
      </div>
    </section>
  );
}

export function GroupFleet() {
  return (
    <section className="products chem-sec" id="fleet">
      <div className="wrap">
        <div className="chem rv">
          <div className="chem-head">
            <h2 className="serif">Group flushing fleet</h2>
            <p>Owned equipment available across {company.group} for large-bore flushing and filtration. Ask for the current equipment list with capacities.</p>
          </div>
          <table className="fleet">
            <thead><tr><th>Equipment</th><th>Capacity</th><th>Typical use</th></tr></thead>
            <tbody>{groupFleet.map((f) => <tr key={f.item}><th scope="row">{f.item}</th><td>{f.spec}</td><td>{f.use}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function ChemicalFunctions() {
  return (
    <section data-tone="light" className="detail chem-fn">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="label green">Chemical functions</span>
            <h2 className="serif">What each chemical stage does.</h2>
          </div>
          <p>Selected on system material, contamination type, process risk and disposal constraints.</p>
        </div>
        <div className="d-grid">
          {chemicalFunctions.map((c, i) => (
            <article className="d-block fx-card" key={c.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif">{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Document library — one tile per document, each a request link to the contact page.
export function Resources() {
  return (
    <section data-tone="light" className="lib" id="resources">
      <div className="wrap">
        <div className="lib-head rv">
          <h2 className="serif">The information your project team needs.</h2>
          <p>Capability profile, equipment list and sample method statements for consultants, contractors and procurement teams. Every document is sent on request.</p>
        </div>
        <div className="lib-grid">
          {documents.map((d, i) => (
            <Link className="lib-tile fx-card" href="/contact" key={d.title}>
              <span className="lib-no">{String(i + 1).padStart(2, "0")}</span>
              <svg className="lib-ico" viewBox="0 0 48 56" width="44" height="52" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M6 2h26l12 12v38a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M32 2v12h12" /><path d="M13 28h22M13 36h22M13 44h14" />
              </svg>
              <h3 className="serif">{d.title}</h3>
              <small>{d.meta}</small>
              <span className="lib-cta">Request document <i aria-hidden="true">→</i></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="cta" id="contact">
      <div
        className="cta-bg"
        style={{ backgroundImage: `linear-gradient(rgba(10,29,51,.72),rgba(10,29,51,.86)),url("${ctaImage}")` }}
      />
      <div className="wrap rv">
        <span className="label aqua">Start a conversation</span>
        <h2 className="serif">Let’s make your system <em>commissioning-ready.</em></h2>
        <p>Tell us the system type, pipe sizes or volume, location and scope. Our engineers will propose the method and equipment package.</p>
        <div className="actions">
          <a className="btn btn-solid" href={`mailto:${company.email}`} data-magnetic>Discuss your project →</a>
          <a className="btn btn-line" href={company.phoneHref}>Call {company.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  const items = [
    { label: "Location", value: company.location },
    { label: "Call us", value: [company.phone] },
    { label: "Email us", value: [company.email] },
    { label: "Part of", value: ["Island Tower", "Group of Companies"] },
  ];
  return (
    <section className="contact">
      <div className="wrap c-grid">
        {items.map((it) => (
          <div className="c-item" key={it.label}>
            <span className="label aqua">{it.label}</span>
            <p>{it.value.map((v, i) => <span key={v}>{i > 0 && <br />}{v}</span>)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// H1 whose words rise in one after another (CSS); the last word is set in italic green.
export function RiseTitle({ text, className = "serif" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="hx-w" aria-hidden="true">
            <span style={{ animationDelay: `${(0.22 + i * 0.06).toFixed(2)}s` }}>{i === words.length - 1 ? <em>{w}</em> : w}</span>
          </span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}

export type HeroFact = { v: string; k: string };
export type HeroVariant = "cinematic" | "split" | "index" | "center";

// Shared inner-page hero in four layouts, so page types open differently:
//  cinematic — full-bleed photo, bottom-aligned, optional fact strip (About)
//  split     — text left, framed photo right, in-page chips (Divisions / Equipment)
//  index     — light, no photo, oversized title over a counter row (Projects)
//  center    — centred title; over a photo when `image` is set, otherwise on a fine grid (Resources)
// Words rise in via CSS (no flash before JS); the last word is set in italic green.
export function PageHero({ eyebrow, title, lead, image, crumb, parent, facts, variant = "cinematic", chips, kicker }: {
  eyebrow: string; title: string; lead: string; image?: string; crumb: string; parent?: { label: string; href: string };
  facts?: HeroFact[]; variant?: HeroVariant; chips?: { label: string; href: string }[]; kicker?: string;
}) {
  const after = 0.45 + title.split(" ").length * 0.06;
  const light = variant === "index";
  return (
    <section className={`page-hero hx-${variant}${facts ? " has-facts" : ""}`} id="top" data-tone={light ? "light" : undefined}>
      {(variant === "cinematic" || variant === "center") && image && <div className="page-hero-bg" style={{ backgroundImage: `url("${image}")` }} />}
      {(variant === "cinematic" || (variant === "center" && image)) && <div className="hx-shade" />}
      {variant === "center" && !image && <div className="hx-grid" aria-hidden="true" />}
      {!light && <div className="hx-glow" aria-hidden="true" />}
      <div className="wrap hx-in">
        <div className="hx-text">
          <nav className="crumb hx-fade" aria-label="Breadcrumb" style={{ animationDelay: ".05s" }}><Link href="/">Home</Link><span>/</span>{parent && <><Link href={parent.href}>{parent.label}</Link><span>/</span></>}<span aria-current="page">{crumb}</span></nav>
          <span className={`label ${light ? "green" : "aqua"} hx-fade`} style={{ animationDelay: ".15s" }}>{eyebrow}</span>
          <RiseTitle text={title} />
          <p className="lead hx-fade" style={{ animationDelay: `${after}s` }}>{lead}</p>
          {chips && (
            <ul className="hx-chips hx-fade" style={{ animationDelay: `${after + 0.1}s` }} aria-label="On this page">
              {chips.map((c) => <li key={c.href}><a href={c.href}>{c.label}</a></li>)}
            </ul>
          )}
        </div>
        {variant === "split" && image && (
          <figure className="hx-panel">
            <div className="hx-panel-img" style={{ backgroundImage: `url("${image}")` }} />
            {kicker && <figcaption className="hx-kicker">{kicker}</figcaption>}
          </figure>
        )}
        {facts && (
          <dl className="hx-facts">
            {facts.map((f, i) => (
              <div className="hx-fade" key={f.k} style={{ animationDelay: `${after + 0.15 + i * 0.08}s` }}>
                <dt className="serif">{f.v}</dt>
                <dd>{f.k}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

// Organisations named in Hydro's own reference list — text only, no logos.
export function ClientMarquee({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const row = [...clients, ...clients];
  return (
    <section className={`mq-sec mq-${tone}`} data-tone={tone === "light" ? "light" : undefined} aria-label="Organisations named in Hydro's reference list">
      <p className={`label ${tone === "light" ? "green" : "aqua"} wrap`}>Named in Hydro&apos;s reference list</p>
      <div className="mq">
        <ul className="mq-track">
          {row.map((c, i) => <li key={i} aria-hidden={i >= clients.length || undefined} className="serif">{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

// Full-width photo break: the frame opens as it enters, the photo moves slower than the
// page and the line of text faster (<PageMotion /> — .px-band). Static without motion.
export function ParallaxBand({ image, label, text }: { image: string; label: string; text: string }) {
  return (
    <section className="px-band" aria-label={label}>
      <div className="px-frame">
        <div className="px-img" style={{ backgroundImage: `url("${image}")` }} />
        <div className="px-shade" />
      </div>
      <div className="wrap px-copy">
        <span className="label aqua">{label}</span>
        <p className="serif">{text}</p>
      </div>
    </section>
  );
}
