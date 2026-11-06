import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import ProjectIndex from "@/components/ProjectIndex";
import { GroupExperience, PageHero } from "@/components/sections/Sections";
import { groupStats, references } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");
const recent = references.filter((r) => !r.historic).length;
const historic = references.length - recent;

export const metadata: Metadata = {
  title: "Projects & References — Chilled Water Flushing & Pre-Commissioning UAE",
  description:
    "Hydro project references across the UAE — Beeah HQ, Etihad Rail, JLT district cooling plants, Expo 2020 pavilions, Hessa Tower and more — plus Island Tower Group flushing experience on Mall of the Emirates, DIFC, Palm Jumeirah DCP and Empower plants.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="Projects"
        eyebrow="Projects"
        title="Systems delivered ready for operation."
        lead="Flushing, testing, chemical treatment and commissioning support for contractors, consultants and operators — each listed with the exact scope."
        variant="index"
        facts={[
          { v: pad(recent), k: "Selected Hydro references" },
          { v: pad(historic), k: "Historic references" },
          { v: groupStats[0].v, k: "Group flushing jobs" },
          { v: "07", k: "Emirates supported" },
        ]}
      />
      <ProjectIndex />
      <GroupExperience />
    </InnerPage>
  );
}
