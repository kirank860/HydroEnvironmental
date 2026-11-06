// Detail pages behind each nav dropdown item.
// Copy: "PRE-QUALIFICATION & CAPABILITY PROFILE" (core divisions pp.5–7, capabilities pp.8–10, SEO keywords p.12),
// rewritten for the web. Group fleet from Island Tower Electromechanical's flushing PQ (labelled as group).
import { productRanges, statementImage, heroImage, ctaImage } from "./content";

const u = (id: string, w = 2000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Block = { title: string; text: string; items?: string[] };

export type DetailPage = {
  slug: string;
  nav: string; // short name used in breadcrumbs and "other pages" links
  eyebrow: string;
  title: string; // H1
  lead: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  introTitle: string; // H2
  intro: string;
  blocks: Block[];
  showChemicals?: boolean; // supplied chemical codes
  showFunctions?: boolean; // chemical function table
  showFleet?: boolean; // group flushing fleet table
  refsMatch?: RegExp; // pulls matching rows from Hydro's own reference list
};

export const solutionPages: DetailPage[] = [
  {
    slug: "process-pipeline-engineering",
    nav: "Process & Pipeline",
    eyebrow: "Division 01 · Process & pipeline engineering",
    title: "Pipeline pre-commissioning & process piping.",
    lead: "Cleaning, flushing, hydrotesting, leak testing, chemical pickling, filtration and disinfection — so a pipeline is ready before it is placed into service.",
    image: u("1607472586893-edb57bdc0e39"),
    metaTitle: "Pipeline Pre-Commissioning, Hydrotesting & Chemical Pickling in UAE",
    metaDescription:
      "Pipeline pre-commissioning in the UAE: system flushing, hydrotesting and pressure testing, leak testing, chemical cleaning and pickling, filtration, disinfection, process plant, steel, alloy and HDPE piping, and insulation support.",
    introTitle: "Systems that work correctly from day one.",
    intro:
      "Pre-commissioning covers every activity required before a pipeline or piping system goes into service. Hydro plans and executes cleaning, flushing, filling, hydrotesting, leak testing, dewatering support, filtration, disinfection and chemical cleaning to the system type and project specification — and documents every result.",
    blocks: [
      { title: "Cleaning & flushing", text: "Removal of construction debris, loose scale, sediment, welding residue, oil and grease traces and particulate contamination.", items: ["System flushing & pipeline cleaning", "Chilled water pipeline flushing", "Temporary bypass & circulation arrangements"] },
      { title: "Hydrotesting & pressure testing", text: "Pressure testing of pipelines and systems to confirm integrity before operation, with chart-recorded results." },
      { title: "Leak testing", text: "Verification of flanges, valves, joints, fittings and system boundaries, with mechanical integrity support." },
      { title: "Chemical cleaning & pickling", text: "Removal of deposits, oils, oxides, scale and process contaminants using selected chemistry, followed by neutralization." },
      { title: "Process piping works", text: "Process plant piping, steel and alloy piping and HDPE works, with hot and cold insulation support.", items: ["Process plant piping", "Steel & alloy piping", "HDPE works", "Hot & cold insulation"] },
      { title: "Filtration, disinfection & records", text: "Staged filtration to remove suspended solids, chemical disinfection of utility systems, and reports, checklists, pressure records and handover documents." },
    ],
    refsMatch: /flushing|disinfection/i,
  },
  {
    slug: "district-cooling",
    nav: "District Cooling",
    eyebrow: "Division 02 · District cooling & thermal utility",
    title: "Chilled water flushing for district cooling.",
    lead: "Engineered flushing, side-stream filtration, chemical treatment and hydrotesting for district cooling networks, ETS connections and DCP internal systems.",
    image: u("1620203853151-496c7228306c"),
    metaTitle: "District Cooling Flushing, ETS Works & Chilled Water Flushing in UAE",
    metaDescription:
      "Chilled water flushing for district cooling networks in the UAE: flushing velocity planning, temporary pumps, side-stream filtration, ETS mechanical works, DCP piping and filter cleaning, CHW chemical treatment and hydrotesting.",
    introTitle: "Clean networks. Stable delta-T. On-time commissioning.",
    intro:
      "District cooling and chilled water systems need a high level of cleanliness, hydraulic readiness and chemical control. Poor flushing leads to clogged strainers, fouled heat exchangers, poor delta-T, pump damage, corrosion and commissioning delays. Hydro develops the flushing strategy from pipe size, system volume, access points and bypass requirements, then executes and reports it.",
    blocks: [
      { title: "Network flushing & cleaning", text: "Pre-flush, dynamic flush, filtration, chemical cleaning support, disinfection and final flushing for primary and secondary CHW pipelines.", items: ["Flushing velocity planning", "Temporary pump & filtration deployment", "Circulation arrangements"] },
      { title: "ETS & DCP works", text: "ETS mechanical works and commissioning support, DCP internal piping support and DCP filter cleaning." },
      { title: "Side-stream filtration", text: "Side-stream and staged filtration to progressively improve system cleanliness and protect plate heat exchangers." },
      { title: "Testing", text: "Valve chamber and pipeline testing support, hydrotesting and leak testing of chilled water pipelines and mechanical systems." },
      { title: "CHW chemical treatment", text: "Chemical disinfection and treatment support, with chemistry compatible with pipe materials, gaskets and seals." },
      { title: "Tie-ins & readiness", text: "Tie-in and shutdown support coordinated with operators, consultants and commissioning teams, with system readiness reporting." },
    ],
    refsMatch: /District Cooling|CHW|Chilled/i,
  },
  {
    slug: "industrial-process-utilities",
    nav: "Industrial Utilities",
    eyebrow: "Division 03 · Industrial process & factory utilities",
    title: "Factory utilities & industrial process engineering.",
    lead: "Warehouse-to-factory conversions, process piping and compressed air, water, steam, gas and chemical utilities — built and commissioned.",
    image: u("1538474705339-e87de81450e8"),
    metaTitle: "Factory Utility Installation, Boiler Cleaning & Heavy Fuel Line Flushing UAE",
    metaDescription:
      "Industrial process engineering in the UAE: warehouse-to-factory conversion, factory utility construction and commissioning, process piping, compressed air, steam and gas utilities, industrial boiler cleaning, heavy fuel line flushing and paint rooms.",
    introTitle: "From empty warehouse to operating factory.",
    intro:
      "Hydro delivers the utility networks, process piping and mechanical connections that manufacturing and process facilities depend on — and supports relocation, recommissioning and shutdown work on existing plants.",
    blocks: [
      { title: "Warehouse-to-factory conversion", text: "Converting warehouse space into an operational industrial facility with utilities, process services and commissioning." },
      { title: "Factory utilities", text: "Construction and commissioning of utility systems.", items: ["Compressed air", "Process & cooling water", "Steam", "Gas & chemical utilities"] },
      { title: "Process piping & tanks", text: "Process piping, mechanical utility connections, storage tanks and process tanks." },
      { title: "Boiler & fuel systems", text: "Industrial boiler cleaning and heavy fuel line flushing for plant utility systems." },
      { title: "Relocation & recommissioning", text: "Factory demolition, relocation and recommissioning, plus conveyor belt integration systems." },
      { title: "Sand-blasting & paint rooms", text: "Construction and commissioning of sand-blasting rooms and paint rooms." },
    ],
    refsMatch: /Paper|Wastewater/i,
  },
  {
    slug: "water-wastewater",
    nav: "Water & Wastewater",
    eyebrow: "Division 04 · Water, wastewater & environmental",
    title: "Water, wastewater & environmental process solutions.",
    lead: "RO and STP installation and commissioning support, contaminated water treatment, desalination support and modular treatment packages.",
    image: statementImage,
    metaTitle: "RO Plant Commissioning, STP Installation & Contaminated Water Treatment UAE",
    metaDescription:
      "Water and wastewater process solutions in the UAE: RO plant installation and commissioning, sewage treatment plant (STP) installation, industrial contaminated water treatment, desalination support, manual and automatic chemical dosing and containerised plants.",
    introTitle: "Treatment systems, installed and commissioned properly.",
    intro:
      "Hydro supports water and wastewater systems from installation through commissioning — and treats contaminated and process water on site with temporary filtration, phase separation and dosing packages when a permanent plant is not yet in place.",
    blocks: [
      { title: "RO & desalination", text: "RO plant installation and commissioning support and desalination plant support works." },
      { title: "Sewage treatment plants", text: "STP installation and commissioning support, with operation and maintenance experience on HEES-maintained plants." },
      { title: "Contaminated water", text: "Industrial contaminated water treatment, phase separation systems and suspended solids treatment." },
      { title: "Filtration & temporary treatment", text: "Filtration systems, temporary treatment packages, temporary storage and transfer systems." },
      { title: "Chemical dosing", text: "Chemical dosing arrangements — both manual and automatic — for treatment and process water." },
      { title: "Modular plants", text: "Modular and containerised plant supply, installation and commissioning support." },
    ],
    refsMatch: /STP|Greywater|Wastewater|dosing/i,
  },
  {
    slug: "process-plant-epc",
    nav: "Process Plant EPC",
    eyebrow: "Division 05 · Process plant EPC & infrastructure",
    title: "Process plant EPC & industrial infrastructure.",
    lead: "Integrated engineering, procurement, construction, installation, testing and commissioning for process plants and utility infrastructure.",
    image: heroImage,
    metaTitle: "Process Plant EPC, Storage Tanks & Industrial Infrastructure in UAE",
    metaDescription:
      "Process plant EPC in the UAE: storage tank design and installation, process piping and utility connections, civil foundations, structural steel platforms and pipe supports, E&I coordination, hygienic process factories, testing, commissioning and retrofit.",
    introTitle: "One partner from foundations to commissioning.",
    intro:
      "For process plants and industrial utility infrastructure, Hydro brings engineering, procurement and construction together with the testing and commissioning discipline of our pre-commissioning teams.",
    blocks: [
      { title: "Storage tanks", text: "Design and installation of storage and process tanks." },
      { title: "Piping & utility connections", text: "Process piping, utility connections and mechanical installation and alignment support." },
      { title: "Civil & structural", text: "Civil foundations and equipment supports, structural steel platforms, pipe supports and access structures." },
      { title: "E&I and automation", text: "Electrical, instrumentation and automation coordination." },
      { title: "Hygienic process factories", text: "Hygienic process piping and factory installations for food and hygienic process facilities." },
      { title: "Testing, commissioning & retrofit", text: "Testing and commissioning, plus plant modification and retrofit works." },
    ],
  },
  {
    slug: "industrial-cleaning",
    nav: "Industrial Cleaning",
    eyebrow: "Division 06 · Industrial cleaning & hydro-demolition",
    title: "Industrial cleaning, hydro-demolition & surface engineering.",
    lead: "High-pressure and UHP water jetting, concrete hydro-cutting, heat exchanger cleaning, blasting and coating for industrial assets.",
    image: u("1556695736-d287caebc48e"),
    metaTitle: "UHP Water Jetting, Hydro-Demolition & Heat Exchanger Cleaning UAE",
    metaDescription:
      "Industrial cleaning in the UAE: aquajetting, high-pressure and ultra-high-pressure water jetting, concrete hydro-demolition and hydro-cutting, heat exchanger and condenser tube cleaning, sand and wet abrasive blasting and protective coating.",
    introTitle: "Restore performance. Prepare surfaces. Remove concrete with control.",
    intro:
      "Using high-pressure and ultra-high-pressure water systems, wet abrasive systems and specialised tools, Hydro supports shutdowns, maintenance, retrofit works, civil repair, mechanical cleaning, surface preparation and industrial asset restoration.",
    blocks: [
      { title: "Aquajetting & UHP cleaning", text: "High-pressure and ultra-high-pressure water jetting for industrial cleaning and surface preparation." },
      { title: "Hydro-demolition", text: "Concrete hydro-demolition and hydro-cutting for controlled concrete removal using high-pressure water, plus concrete cutting." },
      { title: "Heat exchanger cleaning", text: "Heat exchanger and condenser tube bundle cleaning to improve thermal performance and reduce fouling." },
      { title: "Blasting", text: "Sand blasting and wet abrasive blasting for surface preparation before coating." },
      { title: "Coating & painting", text: "Protective coating and painting support for steel and concrete assets." },
    ],
  },
  {
    slug: "chemical-treatment",
    nav: "Chemical Treatment",
    eyebrow: "Division 07 · Chemical engineering & treatment",
    title: "Chemical cleaning, passivation & water chemistry.",
    lead: "Chemical cleaning, disinfection, pickling and passivation, corrosion mitigation, contamination control and water chemistry management.",
    image: productRanges[1].image,
    metaTitle: "Chemical Cleaning, Passivation, Biocide & CHW Chemical Treatment in UAE",
    metaDescription:
      "Chemical engineering solutions in the UAE: chemical cleaning of pipelines, chemical pickling and passivation, disinfection, chilled water chemical treatment, corrosion and scale control, biocide treatment, pH neutralization and chemical supply.",
    introTitle: "The chemistry is chosen for the system — not the other way round.",
    intro:
      "Every chemical strategy is selected on system material, contamination type, process risk, operating requirement, client specification and disposal constraints — and compatibility with pipe materials, gaskets, seals and coatings is checked before anything is dosed.",
    blocks: [
      { title: "Chemical cleaning", text: "Chemical cleaning of pipelines and systems, scale and deposit removal, and flushing chemical selection." },
      { title: "Disinfection", text: "Chemical disinfection of water systems and biocide treatment." },
      { title: "CHW chemical treatment", text: "Chilled water chemical treatment support and chemical dosing system support." },
      { title: "Pickling, passivation & preservation", text: "Chemical pickling and passivation support after cleaning, and preservation of idle systems." },
      { title: "Corrosion control & pH", text: "Corrosion control support, pH correction and neutralization of cleaning fluids and system water." },
      { title: "Treatment & supply", text: "Industrial wastewater, RO and process water treatment support, water quality testing coordination and chemical supply and handling." },
    ],
    showFunctions: true,
    refsMatch: /chemical|dosing/i,
  },
  {
    slug: "equipment-engineering",
    nav: "Equipment Engineering",
    eyebrow: "Division 08 · Equipment engineering, assembly, sales & rental",
    title: "Engineered equipment — assembled, sold and rented.",
    lead: "Pump packages, flushing and filtration skids, hydrotest pumps, generators, compressors and tanks — selected, integrated and supported to the hydraulic requirement.",
    image: productRanges[0].image,
    metaTitle: "Engineered Pump Packages, Flushing Skids & Industrial Equipment Rental UAE",
    metaDescription:
      "Equipment engineering in the UAE: engineered pump packages, diesel and electric pump assemblies, flushing and filtration skid rental, hydrotest pump rental, generator and air compressor rental, dewatering and UHP pumps, tanks and water-jetting equipment.",
    introTitle: "Not simply rented — engineered for the job.",
    intro:
      "Unlike conventional rental providers, Hydro supports clients with equipment selection, integration, assembly, operator support, maintenance and performance-oriented deployment, backed by in-house skid fabrication and pump workshop capability.",
    blocks: [
      { title: "Pump skid assembly", text: "Pump, base frame, suction and discharge headers, valves, gauges, hoses and control elements integrated as one package." },
      { title: "Flushing skids", text: "Pumps, filter vessels, strainers, valves, manifolds, hose connections and temporary circulation arrangements." },
      { title: "Filtration packages", text: "Filter housings, cartridge and bag filters, bypass arrangements and differential pressure monitoring." },
      { title: "Temporary utilities", text: "Generator, pump, air compressor, tank, hose and control packages for temporary site operations." },
      { title: "Mechanical modifications", text: "Pipe spool fabrication, support frames, tank modifications and mechanical integration." },
    ],
  },
];

export const productPages: DetailPage[] = [
  {
    slug: "equipment",
    nav: "Sales & Rental Fleet",
    eyebrow: "Equipment · Sales & rental",
    title: "Equipment sales & rental fleet.",
    lead: "Project-ready pumps, skids, generators, compressors and tanks for flushing, testing, filtration, dewatering, air and power — with technicians and operators.",
    image: productRanges[0].image,
    metaTitle: "Pump Rental UAE — Diesel Pumps, Flushing & Filtration Skids, Generators",
    metaDescription:
      "Equipment rental and sales in the UAE: diesel pump rental, flushing skid and filtration skid rental, hydrotest pump rental, generator and air compressor rental, dewatering and submersible pumps, UHP pumps, tanks, hoses and manifolds.",
    introTitle: "Equipment categories.",
    intro:
      "Every package is checked in our warehouse before mobilization and can be supplied with operators, technicians and maintenance support for the duration of the job.",
    blocks: [
      { title: "Fluid handling systems", text: "Diesel pump assemblies, electric, centrifugal, multistage, split-case, booster, flushing, dewatering and submersible pumps." },
      { title: "Flushing & filtration systems", text: "Flushing skids, filtration skids, filter vessels, side-stream and temporary bypass filtration, hoses, manifolds and valves." },
      { title: "Pressure testing systems", text: "Hydrotesting pumps, pressure gauges, chart recorders, manifolds, hoses and test accessories." },
      { title: "Power & utility systems", text: "Generators, temporary power systems, air compressors, air dryers and utility support packages." },
      { title: "Industrial cleaning systems", text: "High-pressure pumps, UHP systems, water jetting, wet blasting and hydro-cutting equipment." },
      { title: "Storage & process systems", text: "Stainless and mild steel tanks, chemical storage tanks, process tanks and temporary circulation tanks." },
    ],
    showFleet: true,
  },
  {
    slug: "chemicals",
    nav: "Chemicals & Supply",
    eyebrow: "Equipment · Chemicals",
    title: "Cleaning & treatment chemicals.",
    lead: "Flushing, cleaning, pickling, passivation, biocide and corrosion-control chemistry — supplied, dosed and handled safely.",
    image: productRanges[1].image,
    metaTitle: "Flushing Chemicals, CHW Treatment & Chemical Supply in UAE",
    metaDescription:
      "Chemical supply in the UAE for flushing and chemical cleaning, descaling, degreasing, pickling and passivation, biocide and disinfection, neutralization and corrosion control — plus chilled water, boiler, cooling tower and RO treatment chemicals.",
    introTitle: "Chemistry with handling discipline.",
    intro:
      "Chemicals are stored and traded subject to statutory and project requirements, handled with PPE and SDS controls, and neutralized and disposed of responsibly after use.",
    blocks: [],
    showFunctions: true,
    showChemicals: true,
    refsMatch: /chemical/i,
  },
];

export const resourcesPage = { image: heroImage, cta: ctaImage };
