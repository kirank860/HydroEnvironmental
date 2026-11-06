import HeroFX from "@/components/HeroFX";
import HeroRipple from "@/components/HeroRipple";
import { heroImage, heroVideo, statementImage } from "@/lib/content";

const words = (text: string) =>
  text.split(" ").map((w, i, arr) => (
    <span key={i}>
      <span className="w"><span>{w}</span></span>
      {i < arr.length - 1 ? " " : null}
    </span>
  ));

// 01 Hero + 02 Statement. When motion is on, the statement grows over the
// pinned hero as a circle (see components/Motion.tsx).
export default function Intro() {
  return (
    <section id="intro">
      <div className="hero">
        <div className="hero-media">
          <div className="hero-par">
          <div className="hero-bg" style={{ backgroundImage: `url("${heroImage}")` }}>
            {heroVideo && (
              <video className="hero-video" src={heroVideo} poster={heroImage} autoPlay muted loop playsInline preload="metadata" />
            )}
          </div>
          {!heroVideo && <HeroRipple src={heroImage} />}
          </div>
        </div>
        <div className="hero-rays" aria-hidden="true"><i /><i /><i /></div>
        <HeroFX />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />

        <div className="hero-inner wrap">
          <div className="hero-parallax">
            <h1 className="serif">
              <span className="label aqua h-fade hero-eyebrow"><i />Chem-mechanical process engineering · UAE</span>
              <span className="line">{words("Engineering")} <span className="w"><span><em className="shine">reliability</em></span></span></span>
              <span className="line">{words("in every process.")}</span>
            </h1>
          </div>
          <div className="hero-row">
            <div className="h-fade">
              <p className="lead">
                Chilled water flushing, pipeline pre-commissioning, hydrotesting, chemical cleaning, industrial utilities
                and engineered equipment — for systems that are clean, tested and ready for operation.
              </p>
              <div className="actions">
                <a className="btn btn-solid" href="#contact" data-magnetic>Discuss your project <span className="arr">→</span></a>
                <a className="btn btn-line" href="#solutions" data-magnetic>Explore our divisions</a>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-cue h-fade" href="#every" aria-label="Scroll to next section"><span />Scroll</a>
      </div>

      <div className="statement">
        <div className="statement-bg" style={{ backgroundImage: `url("${statementImage}")` }} />
        <div className="wrap">
          <span className="label aqua">HEES</span>
          <h2 className="serif">
            <span className="l1">We don’t merely install systems.</span>
            <span className="l2">We engineer certainty.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
