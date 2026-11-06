import { chapters } from "@/lib/content";

export default function Chapters() {
  return (
    <section className="chapters">
      <div className="wrap">
        <div className="ch-head">
          <div>
            <span className="label aqua">Engineering methodology</span>
            <h2 className="serif">From technical assessment to reliable operation.</h2>
          </div>
          <p>Eight stages that turn complex technical requirements into safe, measurable and validated field results — for flushing, hydrotesting, chemical cleaning, utilities or rental packages.</p>
        </div>
        <div className="ch-viewport">
          <div className="ch-track">
            {chapters.map((c) => (
              <div className="chapter" key={c.n}>
                <div className="ch-text">
                  <span className="label aqua">Stage {c.n}</span>
                  <h3 className="serif">{c.title}</h3>
                  <p>{c.text}</p>
                  <div className="tag">{c.tag}</div>
                </div>
                <div className="ch-img photo" style={{ backgroundImage: `url("${c.image}")` }} role="img" aria-label={`${c.title} — illustrative photo`} />

              </div>
            ))}
          </div>
        </div>
        <div className="dashes">
          {chapters.map((c, i) => <i key={c.n} className={i === 0 ? "on" : undefined} />)}
        </div>
      </div>
    </section>
  );
}
