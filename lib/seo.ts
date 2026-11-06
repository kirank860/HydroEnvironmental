// SEO configuration for heesllc.ae — keyword map from the capability profile (p.12).
// TODO: confirm the live domain before launch.
import { company, divisionNav, faqs } from "./content";

export const siteUrl = "https://www.heesllc.ae";

export const seo = {
  title: "Chem-Mechanical Process Engineering Company in UAE | Hydro Environmental & Engineering Services LLC",
  shortTitle: "Chem-Mechanical Process Engineering Company in UAE",
  description:
    "HEES is a UAE chem-mechanical process engineering company since 2008 — chilled water flushing, pipeline pre-commissioning, hydrotesting, chemical cleaning, industrial commissioning, water treatment and engineered equipment rental.",
};

/** Primary + secondary keywords (grouped by search intent). */
export const keywords = [
  // primary
  "chem-mechanical engineering UAE", "chilled water flushing UAE", "pipeline pre-commissioning UAE",
  "hydrotesting services UAE", "chemical cleaning UAE", "industrial commissioning UAE",
  "fluid systems engineering", "district cooling flushing", "equipment rental UAE", "engineered pump packages",
  // district cooling
  "district cooling network flushing", "ETS works", "chilled water system flushing", "DCP piping support",
  "CHW chemical treatment", "chilled water hydrotesting", "side stream filtration", "thermal utility commissioning",
  // industrial
  "factory utility installation", "process piping UAE", "industrial plant commissioning", "RO plant commissioning",
  "STP installation support", "boiler cleaning UAE", "heavy fuel line flushing", "industrial water treatment",
  "contaminated water treatment", "chemical pickling UAE", "passivation services UAE",
  // cleaning
  "UHP water jetting UAE", "hydro-demolition UAE", "heat exchanger cleaning UAE", "wet abrasive blasting",
  // equipment
  "pump rental UAE", "diesel pump rental", "flushing skid rental", "filtration skid rental", "hydrotest pump rental",
  "generator rental UAE", "air compressor rental UAE", "dewatering pump rental", "UHP pump rental", "water jetting equipment",
  // local
  "chilled water flushing Dubai", "chilled water flushing Abu Dhabi", "pre-commissioning company Sharjah",
];

/** JSON-LD for Google rich results: Organization/LocalBusiness, WebSite and FAQ. */
export function structuredData() {
  const org = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: ["HEES", "Hydro Environmental", "Hydro Engineering & Environmental Services"],
    url: siteUrl,
    logo: `${siteUrl}/opengraph-image`,
    image: `${siteUrl}/opengraph-image`,
    description: seo.description,
    slogan: company.tagline,
    foundingDate: company.established,
    email: company.email,
    telephone: company.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Sajaa Industrial Area",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      postOfficeBoxNumber: "61204",
      addressCountry: "AE",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    parentOrganization: { "@type": "Organization", name: "Island Tower Group of Companies" },
    knowsAbout: [
      "Chem-mechanical process engineering", "Pipeline pre-commissioning", "Chilled water flushing", "District cooling",
      "Hydrotesting", "Leak testing", "Chemical cleaning", "Chemical pickling", "Passivation", "Side-stream filtration",
      "Industrial commissioning", "Factory utilities", "RO plant commissioning", "Sewage treatment plants",
      "UHP water jetting", "Hydro-demolition", "Heat exchanger cleaning", "Pump packages", "Equipment rental",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core business divisions",
      itemListElement: divisionNav.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.title, description: d.desc, url: `${siteUrl}${d.href}`, areaServed: "AE" },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-AE",
  };

  return { "@context": "https://schema.org", "@graph": [org, website] };
}

/** FAQPage JSON-LD — published on /resources, where the FAQ is visible. */
export function faqStructuredData() {
  const faq = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/resources#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { "@context": "https://schema.org", ...faq };
}
