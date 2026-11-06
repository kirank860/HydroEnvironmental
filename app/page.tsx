import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Magnetic from "@/components/Magnetic";
import Intro from "@/components/sections/Intro";
import LandingMotion from "@/components/landing/LandingMotion";
import { Band, EverySystem, Feature, Journey, Places, Reach, Steps } from "@/components/landing/Landing";
import { structuredData } from "@/lib/seo";
import "./landing.css";

// Homepage — same story structure as the reference site, told with HEES content.
// H1 lives in the hero; every section below opens with one H2.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c") }}
      />
      <Preloader />
      <div className="lp-progress" aria-hidden="true" />
      <Header />
      <main id="top" className="lp">
        <Intro />
        <EverySystem />
        <Journey />
        <Feature />
        <Band />
        <Steps />
        <Places />
        <Reach />
      </main>
      <Footer />
      <LandingMotion />
      <Magnetic />
    </>
  );
}
