import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { Capabilities, PageHero } from "@/components/sections/Sections";
import Chapters from "@/components/sections/Chapters";
import { statementImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Divisions — Pipeline Pre-Commissioning, District Cooling Flushing & Industrial Engineering UAE",
  description:
    "Eight core divisions: process & pipeline engineering, district cooling & thermal utility, industrial process & factory utilities, water & wastewater, process plant EPC, industrial cleaning & hydro-demolition, chemical treatment, and equipment engineering, sales & rental.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="Divisions"
        eyebrow="Core business divisions"
        title="Eight divisions. One engineering standard."
        lead="Engineer → Assemble → Execute → Test → Commission → Optimize → Maintain — applied to every fluid, process and utility system we touch."
        image={statementImage}
      />
      <Capabilities />
      <Chapters />
    </InnerPage>
  );
}
