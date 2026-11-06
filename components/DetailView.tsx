import Link from "next/link";
import { ChemicalCatalogue, ChemicalFunctions, GroupFleet, PageHero } from "@/components/sections/Sections";
import { references } from "@/lib/content";
import type { DetailPage } from "@/lib/pages";

// Layout for every dropdown page (Solutions/* and Products/*) — a technical "spec sheet",
// deliberately unlike the editorial About page:
// split hero (H1 + framed photo + in-page chips) → sticky summary beside a numbered scope list (H2/H3)
// → optional chemical functions / group fleet / chemical codes → related projects strip → sibling index
export default function DetailView({ page, siblings, base, section }: { page: DetailPage; siblings: DetailPage[]; base: string; section: string }) {
  const related = page.refsMatch ? references.filter((r) => page.refsMatch!.test(`${r.scope} ${r.name}`)).slice(0, 6) : [];
  const others = siblings.filter((p) => p.slug !== page.slug);
  const pos = siblings.findIndex((p) => p.slug === page.slug) + 1;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <PageHero
        variant="split"
        crumb={page.nav}
        parent={{ label: section, href: base }}
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.lead}
        image={page.image}
        kicker={`${pad(pos)} / ${pad(siblings.length)} · ${page.nav}`}
        chips={page.blocks.slice(0, 6).map((b, i) => ({ label: b.title, href: `#scope-${i + 1}` }))}
      />

      <section data-tone="light" className="spec" id="scope">
        <div className="wrap spec-grid">
          <aside className="spec-aside">
            <span className="label green">Scope of work</span>
            <h2 className="serif">{page.introTitle}</h2>
            <p>{page.intro}</p>
            <div className="spec-meta">
              <div><b className="serif">{pad(page.blocks.length)}</b><span>Service lines</span></div>
              {related.length > 0 && <div><b className="serif">{pad(related.length)}</b><span>Related references</span></div>}
            </div>
            <Link className="btn btn-dark" href="/contact">Discuss this scope →</Link>
          </aside>
          {page.blocks.length > 0 && (
            <ol className="spec-list">
              {page.blocks.map((b, i) => (
                <li className="spec-item rv" id={`scope-${i + 1}`} key={b.title}>
                  <span className="spec-n serif">{pad(i + 1)}</span>
                  <div>
                    <h3 className="serif">{b.title}</h3>
                    <p>{b.text}</p>
                    {b.items && <ul className="spec-tags">{b.items.map((it) => <li key={it}>{it}</li>)}</ul>}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {page.showFunctions && <ChemicalFunctions />}
      {page.showFleet && <GroupFleet />}
      {page.showChemicals && <ChemicalCatalogue />}

      {related.length > 0 && (
        <section className="strip" aria-labelledby="strip-h">
          <div className="wrap strip-head">
            <div>
              <span className="label aqua">Related projects</span>
              <h2 className="serif" id="strip-h">Where we have delivered this.</h2>
            </div>
            <Link className="strip-all" href="/projects">All projects →</Link>
          </div>
          <ul className="strip-track">
            {related.map((r) => (
              <li className="strip-card" key={r.name}>
                <small>{r.scope}</small>
                <h3 className="serif">{r.name}</h3>
                <p><span>{r.relLabel}</span>{r.rel}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {others.length > 0 && (
        <nav data-tone="light" className="sib" aria-label={`Other ${section.toLowerCase()}`}>
          <div className="wrap sib-grid">
            <div className="sib-head">
              <span className="label green">Other {section.toLowerCase()}</span>
              <p>Most projects combine several disciplines — one team covers all of them.</p>
            </div>
            <ul className="sib-list">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`${base}/${o.slug}`}>
                    <span className="serif">{o.nav}</span>
                    <i aria-hidden="true">→</i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
