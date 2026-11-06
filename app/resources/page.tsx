import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import Faq from "@/components/sections/Faq";
import { PageHero, Resources } from "@/components/sections/Sections";
import { resourcesImage } from "@/lib/content";
import { faqStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resources — Capability Profile, Equipment List & FAQ",
  description:
    "Download requests for the HEES pre-qualification & capability profile, equipment list and sample method statements, plus answers on chilled water flushing, pre-commissioning, hydrotesting, chemical cleaning and equipment rental in the UAE.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <InnerPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData()).replace(/</g, "\\u003c") }}
      />
      <PageHero
        crumb="Resources"
        eyebrow="Resources"
        title="Documents & answers."
        lead="Capability profile, equipment list and method statements for consultants, contractors and procurement teams — plus answers to the questions we hear most."
        variant="center"
        image={resourcesImage}
      />
      <Resources />
      <Faq />
    </InnerPage>
  );
}
