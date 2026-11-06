import { faqs } from "@/lib/content";

// Visible FAQ (native <details> — accessible, no JS) mirrored as FAQPage JSON-LD in lib/seo.ts
export default function Faq() {
  return (
    <section data-tone="light" className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-intro rv">
          <span className="label green">FAQ</span>
          <h2 className="serif">Process engineering questions, answered.</h2>
          <p>Common questions about chilled water flushing, pre-commissioning, hydrotesting, chemical cleaning, industrial cleaning and equipment rental in the UAE.</p>
          <a className="btn btn-dark" href="#contact">Ask our team →</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item rv" key={f.q} open={i === 0}>
              <summary>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.q}</h3>
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
