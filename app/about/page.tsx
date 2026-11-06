import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { ClientMarquee, Environments, Facilities, GroupExperience, PageHero, ParallaxBand } from "@/components/sections/Sections";
import { AboutModel, AboutPillars, AboutStatement, AboutWhy } from "@/components/about/About";
import { aboutImage, bands, company } from "@/lib/content";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us — Chem-Mechanical Process Engineering Company in UAE since 2008",
  description:
    "Hydro Environmental & Engineering Services LLC (HEES) — a UAE chem-mechanical process engineering company since 2008, part of Island Tower Group. Vision, mission, Trial and No Error philosophy, why Hydro, facilities and QHSE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="About"
        eyebrow="About HEES"
        title="Engineering reliability in every process."
        lead="A specialised chem-mechanical process engineering company — operating at the intersection of chemistry, mechanics, hydraulics and field engineering."
        image={aboutImage}
        facts={[
          { v: company.established, k: "Established in the UAE" },
          { v: "08", k: "Core business divisions" },
          { v: "07", k: "Stage delivery model" },
          { v: "Group", k: "Part of Island Tower Group" },
        ]}
      />
      <AboutStatement />
      <AboutModel />
      <ParallaxBand {...bands.about} />
      <AboutPillars />
      <AboutWhy />
      <ClientMarquee />
      <Environments />
      <Facilities />
      <GroupExperience limit={12} />
    </InnerPage>
  );
}
