// Homepage copy, laid out to the reference structure (hydropsindia.com):
// hero → arc statement → "Every system" → journey (horizontal) → feature → band → stacked steps → where we work → reach us.
// Images: Unsplash (free licence), illustrative only — swap for HEES site photos when available.

const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const everySystem = {
  title: "Every process",
  groups: [
    { lines: ["Begins"], accent: "with engineering." },
    { lines: ["Cleaned.", "Tested.", "Validated."], small: true },
    { lines: ["Ready for operation."] },
  ],
};

export const feature = {
  label: "Chem-mechanical process engineering",
  title: ["Engineering,", "equipment and", "chemistry — as one."],
  text: "Hydro combines chemical engineering, mechanical execution, fluid dynamics and project-ready equipment to solve problems of flow, pressure, contamination, corrosion and system integrity — across eight specialist divisions.",
  image: u("1519455953755-af066f52f1a6", 1200),
  chips: ["Flush · Test · Commission", "8 divisions · Since 2008"],
};

export const band = {
  label: "Our philosophy · Trial and no error",
  lines: ["No trial.", "No error."],
  accent: "Only certainty.",
  text: "Disciplined planning, controlled execution, safety-first operations and documented validation — confidence before a system becomes operational.",
};

export const steps = [
  {
    n: "01", chip: "Process & pipeline", title: "Pipelines ready before service.",
    text: "Pre-commissioning, system flushing, hydrotesting, leak testing, chemical cleaning and pickling, process, steel, alloy and HDPE piping.",
    href: "/solutions/process-pipeline-engineering", image: u("1607472586893-edb57bdc0e39"),
  },
  {
    n: "02", chip: "District cooling", title: "Chilled water networks, flushed clean.",
    text: "Flushing velocity planning, temporary pumps, side-stream filtration, ETS works, DCP piping and filter cleaning, CHW chemical treatment.",
    href: "/solutions/district-cooling", image: u("1620203853151-496c7228306c"),
  },
  {
    n: "03", chip: "Industrial & EPC", title: "Factories and plants, built to run.",
    text: "Factory utilities and conversions, boiler cleaning, heavy fuel line flushing, process plant EPC, RO and STP commissioning, UHP cleaning.",
    href: "/solutions/industrial-process-utilities", image: u("1538474705339-e87de81450e8"),
  },
  {
    n: "04", chip: "Equipment & rental", title: "Engineered equipment, on call.",
    text: "Pump packages, diesel and electric pumps, flushing and filtration skids, hydrotest pumps, generators, compressors and tanks — with operators.",
    href: "/products/equipment", image: u("1579525612525-053cd3e8cbd7"),
  },
];

// Captions are real Hydro jobs from the PQ 2025 reference list
export const places = [
  {
    kicker: "District cooling", title: "Networks that hold their delta-T.",
    text: "Chilled water flushing, ETS works, DCP piping support, side-stream filtration and hydrotesting.",
    chip: "JLT DCP 1, 3 & 4 · CHW flushing", image: u("1556695736-d287caebc48e"),
  },
  {
    kicker: "Commercial & buildings", title: "Towers commissioned on time.",
    text: "Building CHW flushing, chemical treatment, automatic dosing and pump systems.",
    chip: "Hessa Tower · CHW flushing", image: u("1579525612525-053cd3e8cbd7"),
  },
  {
    kicker: "Industry & manufacturing", title: "Process utilities, under control.",
    text: "Factory utilities, process piping, boiler cleaning, wastewater and industrial cleaning.",
    chip: "Union Paper Mills · Wastewater", image: u("1538474705339-e87de81450e8"),
  },
  {
    kicker: "Water & wastewater", title: "Treatment plants, commissioned right.",
    text: "RO and STP installation and commissioning support, contaminated water and dosing.",
    chip: "Al Rakha · 300 m³/day STP", image: u("1572331165267-854da2b10ccc"),
  },
  {
    kicker: "Infrastructure", title: "Built for the scale of the UAE.",
    text: "Rail, metro, utility corridors and landmark developments — flushed, tested and documented.",
    chip: "Etihad Rail · Flushing & treatment", image: u("1538108149393-fbbd81895907"),
  },
];

export const reach = {
  label: "HEES · Chem-mechanical process engineering · UAE",
  title: "Ready to make your system",
  accent: "commissioning-ready?",
  text: "Talk to our engineers about flushing, pre-commissioning, hydrotesting, chemical cleaning, industrial utilities or an equipment package — for projects across all seven emirates.",
  mapQuery: "Al Sajaa Industrial Area, Sharjah, UAE",
};
