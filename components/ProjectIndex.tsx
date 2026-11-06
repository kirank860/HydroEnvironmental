"use client";

import { useMemo, useState } from "react";
import { clients, references } from "@/lib/content";

// Projects page: one filterable index of Hydro's own references (recent + historic).
// Filters match on the HEES scope text, so new references sort themselves.
const filters = [
  { k: "all", label: "All work", test: () => true },
  { k: "chw", label: "Chilled water flushing", test: (s: string) => /flush/i.test(s) },
  { k: "chem", label: "Chemical treatment & dosing", test: (s: string) => /chemical|dosing/i.test(s) },
  { k: "stp", label: "STP & wastewater", test: (s: string) => /STP|greywater|wastewater/i.test(s) },
  { k: "dis", label: "Disinfection", test: (s: string) => /disinfection/i.test(s) },
];

export default function ProjectIndex() {
  const [active, setActive] = useState("all");
  const counts = useMemo(() => Object.fromEntries(filters.map((f) => [f.k, references.filter((r) => f.test(r.scope)).length])), []);
  const f = filters.find((x) => x.k === active) ?? filters[0];
  const rows = references.filter((r) => f.test(r.scope));

  return (
    <section className="pi" id="projects">
      <div className="wrap">
        <div className="pi-bar">
          <h2 className="serif">Project index</h2>
          <div className="pi-filters" role="group" aria-label="Filter projects by scope">
            {filters.map((x) => (
              <button key={x.k} type="button" aria-pressed={active === x.k} className={active === x.k ? "on" : ""} onClick={() => setActive(x.k)}>
                {x.label}<sup>{counts[x.k]}</sup>
              </button>
            ))}
          </div>
        </div>

        <ol className="pi-list" aria-live="polite">
          {rows.map((r, i) => (
            <li className="pi-row" key={r.name} style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}>
              <span className="pi-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif">{r.name}{r.historic && <em>Historic</em>}</h3>
              <p className="pi-scope">{r.scope}</p>
              <p className="pi-rel"><small>{r.relLabel}</small>{r.rel}</p>
            </li>
          ))}
        </ol>

        <div className="pi-foot">
          <p><small>Worked with</small>{clients.join(" · ")}</p>
          <span>Projects are shown with HEES&apos;s specific scope only.</span>
        </div>
      </div>
    </section>
  );
}
