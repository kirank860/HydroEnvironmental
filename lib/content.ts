// All site copy lives here so it can be reviewed and approved in one place.
// Source: "PRE-QUALIFICATION & CAPABILITY PROFILE" (chem-mechanical process engineering, 14 pp., Nov 2026)
// + HYDRO PREQUALIFICATION 2025 (Hydro's own project references)
// + Island Tower Electromechanical "Flushing Prequalification" (group flushing track record & fleet — shown as GROUP experience).
// Items marked TODO need confirmation before launch.

const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const company = {
  // Legal name per trade licence (the new profile prints "Hydro Engineering & Environmental" — licence order kept on purpose)
  name: "Hydro Environmental & Engineering Services LLC",
  short: "HEES",
  tagline: "Engineering Reliability in Every Process",
  positioning: "We do not merely install systems — we engineer performance, reliability and operational certainty.",
  identity: "Chem-mechanical process engineering",
  established: "2008",
  // TODO: confirm current number (04-2573677 vs 06-545 3318) and office — new profile says Dubai, licence says Sharjah
  phone: "+971 4 257 3677",
  phoneHref: "tel:+97142573677",
  email: "info@heesllc.ae",
  website: "www.heesllc.ae",
  location: ["Al Sajaa Industrial Area, Sharjah", "P.O. Box 61204, UAE"],
  group: "Island Tower Group of Companies",
  deliveryModel: ["Engineer", "Assemble", "Execute", "Test", "Commission", "Optimize", "Maintain"],
};

// The 8 core business divisions — each has its own page under /solutions/<slug>
export const divisionNav = [
  { title: "Process & Pipeline Engineering", desc: "Pre-commissioning, flushing, hydrotesting, chemical pickling", href: "/solutions/process-pipeline-engineering" },
  { title: "District Cooling & Thermal Utility", desc: "CHW flushing, ETS, DCP piping, side-stream filtration", href: "/solutions/district-cooling" },
  { title: "Industrial Process & Factory Utilities", desc: "Factory conversions, utilities, boiler & fuel-line cleaning", href: "/solutions/industrial-process-utilities" },
  { title: "Water, Wastewater & Environmental", desc: "RO & STP commissioning, contaminated water, dosing", href: "/solutions/water-wastewater" },
  { title: "Process Plant EPC & Infrastructure", desc: "Tanks, piping, steel, E&I coordination, retrofit", href: "/solutions/process-plant-epc" },
  { title: "Industrial Cleaning & Hydro-Demolition", desc: "UHP jetting, hydro-cutting, exchanger cleaning, blasting", href: "/solutions/industrial-cleaning" },
  { title: "Chemical Engineering & Treatment", desc: "Chemical cleaning, passivation, biocide, corrosion control", href: "/solutions/chemical-treatment" },
  { title: "Equipment Engineering & Rental", desc: "Pump packages, flushing & filtration skids, generators", href: "/solutions/equipment-engineering" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/solutions", children: divisionNav },
  {
    label: "Equipment",
    href: "/products",
    children: [
      { title: "Sales & Rental Fleet", desc: "Pumps, skids, generators, compressors, tanks", href: "/products/equipment" },
      { title: "Chemicals & Supply", desc: "Cleaning, treatment & dosing chemicals", href: "/products/chemicals" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
] as const;

/** On the homepage, which section stands in for each nav route (for the active underline). */
export const homeSectionFor: Record<string, string> = {
  "/": "#intro", "/about": "#every", "/solutions": "#solutions", "/projects": "#projects",
};

// Legacy explorer (not on the current landing page) — kept in sync with the divisions
export const serviceExplorer = [
  { title: "Chilled Water Flushing", text: "Engineered flushing, filtration and chemical treatment for district cooling networks, ETS and building CHW systems.", href: "/solutions/district-cooling", image: u("1620203853151-496c7228306c") },
  { title: "Pipeline Pre-Commissioning", text: "Cleaning, flushing, hydrotesting, leak testing and chemical pickling before a system is placed into service.", href: "/solutions/process-pipeline-engineering", image: u("1607472586893-edb57bdc0e39") },
  { title: "Industrial Utilities", text: "Factory conversions, process piping and compressed air, steam, gas and water utilities.", href: "/solutions/industrial-process-utilities", image: u("1538474705339-e87de81450e8") },
  { title: "Water & Wastewater", text: "RO and STP installation and commissioning support, contaminated water and modular treatment packages.", href: "/solutions/water-wastewater", image: u("1533077162801-86490c593afb") },
  { title: "Industrial Cleaning", text: "UHP water jetting, hydro-demolition, heat exchanger cleaning and blasting.", href: "/solutions/industrial-cleaning", image: u("1556695736-d287caebc48e") },
  { title: "Equipment & Rental", text: "Engineered pump packages, flushing and filtration skids, generators and compressors.", href: "/products/equipment", image: u("1579525612525-053cd3e8cbd7") },
];

export const serviceRibbon = [
  { label: "Process & Pipeline Engineering", href: "/solutions/process-pipeline-engineering" },
  { label: "District Cooling & Thermal Utility", href: "/solutions/district-cooling" },
  { label: "Industrial Process & Utilities", href: "/solutions/industrial-process-utilities" },
  { label: "Water & Wastewater", href: "/solutions/water-wastewater" },
  { label: "Process Plant EPC", href: "/solutions/process-plant-epc" },
  { label: "Industrial Cleaning & UHP", href: "/solutions/industrial-cleaning" },
  { label: "Chemical Treatment & Passivation", href: "/solutions/chemical-treatment" },
  { label: "Equipment Engineering & Rental", href: "/products/equipment" },
];

export const manifesto = [
  { step: "Study", lines: ["Every process", "begins with"], accent: "understanding.", caption: "System purpose, conditions and risk", image: u("1535868118629-f37bcd69ff59", 900) },
  { step: "Engineer", lines: ["Planned carefully.", "Executed with control."], accent: "Validated fully.", caption: "Method, equipment and documented results", image: u("1607472586893-edb57bdc0e39", 900) },
  { step: "Operate", lines: ["Trial and no error."], accent: "Ready for operation.", label: "Flush · Test · Clean · Commission", caption: "Commissioning-ready assets", image: u("1533163238111-4a7ced54f2e4", 900) },
];

// Engineering methodology — profile p.8 (8 stages). Used by the horizontal journey and /solutions.
export const chapters = [
  { n: "01", title: "Technical assessment", text: "Drawings, pipe sizes, materials, volumes, design and operating pressure, flow, contamination risk, chemical compatibility and acceptance criteria are reviewed first.", tag: "Engineering before execution.", image: u("1568487007364-175e0d26233b", 1200) },
  { n: "02", title: "Method engineering", text: "Method statement, ITP, flushing or cleaning sequence, hydrotest procedure, chemical plan, equipment layout, hose route, filtration stages and safety controls.", tag: "Every step written down.", image: u("1533077162801-86490c593afb", 1200) },
  { n: "03", title: "Equipment sizing", text: "Pumps, filters, strainers, tanks, generators, compressors, manifolds, gauges and chart recorders selected on flow, head, pressure, solids loading and duration.", tag: "Correct equipment, not available equipment.", image: u("1607472586893-edb57bdc0e39", 1200) },
  { n: "04", title: "Site mobilization", text: "Tested equipment, trained operators, chemical handling arrangements, barricades, spill control, lifting accessories and documentation mobilised to site.", tag: "Ready from our warehouse to your site.", image: u("1579525612525-053cd3e8cbd7", 1200) },
  { n: "05", title: "Controlled execution", text: "Flushing, circulation, chemical cleaning, pressure and leak testing, filtration and disinfection under supervision and defined hold points.", tag: "Controlled, supervised, safe.", image: u("1620203853151-496c7228306c", 1200) },
  { n: "06", title: "Monitoring & validation", text: "Flow, pressure, turbidity, filter differential pressure, test duration, leakage, chemical parameters and client witness points are monitored throughout.", tag: "Measured, not assumed.", image: u("1644389355109-15b26f71c36b", 1200) },
  { n: "07", title: "Documentation & handover", text: "Reports, test records, pressure charts, flushing and chemical records, photographs, equipment logs and completion certificates.", tag: "Evidence for acceptance.", image: u("1526599256864-6bedb9d7dfb5", 1200) },
  { n: "08", title: "Optimization & support", text: "Commissioning support, troubleshooting, additional filtration, chemical adjustment, balancing assistance, temporary utilities and maintenance follow-up.", tag: "Beyond completion — to reliable operation.", image: u("1533163238111-4a7ced54f2e4", 1200) },
];

// Core business divisions — profile pp.5–7 (with handwritten edits: Chemical Pickling replaces flange management;
// dosing "both manual & automatic").
export const capabilities = [
  {
    n: "01", title: "Process & Pipeline Engineering", id: "process-pipeline", href: "/solutions/process-pipeline-engineering",
    text: "Pipeline and process system preparation, cleaning, testing, leak verification, filtration, disinfection and commissioning readiness.",
    items: ["Pipeline pre-commissioning", "Chilled water pipeline flushing", "Hydrotesting & leak testing", "Chemical cleaning & chemical pickling", "Process plant, steel & alloy piping", "HDPE works, hot & cold insulation"],
  },
  {
    n: "02", title: "District Cooling & Thermal Utility", id: "district-cooling", href: "/solutions/district-cooling",
    text: "Chilled water systems, district cooling networks, ETS connections, DCP internal systems and thermal utility readiness.",
    items: ["CHW system flushing & cleaning", "ETS mechanical works & commissioning support", "DCP internal piping & filter cleaning", "Side-stream filtration", "Valve chamber & pipeline testing", "Tie-in & shutdown support"],
  },
  {
    n: "03", title: "Industrial Process & Factory Utilities", id: "industrial", href: "/solutions/industrial-process-utilities",
    text: "Industrial utility systems, factory conversions, process piping and commissioning support for manufacturing facilities.",
    items: ["Warehouse-to-factory conversion", "Compressed air, water, steam & gas utilities", "Industrial boiler cleaning", "Heavy fuel line flushing", "Conveyor belt integration", "Sand-blasting & paint room construction"],
  },
  {
    n: "04", title: "Water, Wastewater & Environmental", id: "water", href: "/solutions/water-wastewater",
    text: "Water treatment, contaminated water, RO and STP installation and commissioning support and industrial wastewater assistance.",
    items: ["Industrial contaminated water treatment", "RO plant installation & commissioning", "STP installation & commissioning", "Desalination plant support", "Manual & automatic chemical dosing", "Modular / containerised plants"],
  },
  {
    n: "05", title: "Process Plant EPC & Infrastructure", id: "epc", href: "/solutions/process-plant-epc",
    text: "Integrated engineering, procurement, construction, testing and commissioning for process plants and utility infrastructure.",
    items: ["Storage tank design & installation", "Process piping & utility connections", "Civil foundations & structural steel", "E&I and automation coordination", "Hygienic process factory installations", "Plant modification & retrofit"],
  },
  {
    n: "06", title: "Industrial Cleaning & Hydro-Demolition", id: "cleaning", href: "/solutions/industrial-cleaning",
    text: "UHP water jetting, concrete removal, exchanger cleaning, blasting and coating support for industrial assets.",
    items: ["Aquajetting & UHP cleaning", "Hydro-demolition / concrete hydro-cutting", "Heat exchanger & condenser tube cleaning", "Sand & wet abrasive blasting", "Protective coating & painting", "Surface preparation, steel & concrete"],
  },
  {
    n: "07", title: "Chemical Engineering & Treatment", id: "chemical", href: "/solutions/chemical-treatment",
    text: "Chemical cleaning, disinfection, passivation, corrosion mitigation, contamination control and water chemistry management.",
    items: ["Chemical cleaning of pipelines", "Disinfection of water systems", "Passivation & preservation", "Corrosion, scale & deposit control", "Biocide treatment & pH neutralisation", "Chemical supply & handling"],
  },
  {
    n: "08", title: "Equipment Engineering, Sales & Rental", id: "equipment", href: "/solutions/equipment-engineering",
    text: "Engineered fluid handling, temporary utilities, pressure testing, filtration and industrial equipment for rental, sale or projects.",
    items: ["Engineered pump packages", "Diesel & electric pump assemblies", "Flushing & filtration skids", "Hydrotest pumps & accessories", "Generators, compressors & air dryers", "Tanks, blasting & water-jetting equipment"],
  },
];

// Vision, mission & philosophy — profile p.4
export const strategy = [
  { k: "Vision", v: "To become the region’s most trusted chem-mechanical process engineering company for critical fluid systems, industrial process reliability, district cooling infrastructure and utility engineering solutions." },
  { k: "Mission", v: "To deliver technically superior, safe, efficient and reliable engineering solutions that improve system integrity, commissioning readiness, operational reliability, environmental performance and long-term asset value." },
  { k: "Philosophy", v: "Trial and No Error — disciplined planning, controlled execution, safety-first operations and documented validation. This is how we create confidence before a system becomes operational." },
  { k: "Promise", v: "Clean, tested, reliable and commissioning-ready systems — engineering + equipment + chemistry + execution + validation." },
];

// Why Hydro — profile p.5
export const whyHydro = [
  { title: "Chem-mechanical expertise", text: "Chemical treatment, mechanical systems, fluid dynamics, pressure testing and commissioning knowledge in one team." },
  { title: "End-to-end delivery", text: "From engineering assessment to equipment deployment, site execution, testing, documentation, commissioning and optimization." },
  { title: "District cooling knowledge", text: "Practical experience in chilled water flushing, ETS works, DCP internal systems, filtration and hydrotesting." },
  { title: "In-house equipment readiness", text: "Pumps, filtration systems, tanks, generators, compressors, hoses and manifolds mobilised as project packages." },
  { title: "Process reliability focus", text: "Reducing contamination, corrosion, pressure loss, clogged strainers, poor water quality and premature equipment failure." },
  { title: "Engineering-based rental", text: "Equipment is selected, assembled, integrated and supported to the hydraulic and operational requirement — not simply rented." },
  { title: "Responsive mobilization", text: "Warehouse, technicians, equipment and field teams together support rapid deployment for critical requirements." },
  { title: "Quality & HSE mindset", text: "Method control, safe chemical handling, pressure safety, hose management, environmental protection and proper records." },
];

// Facilities & QHSE — profile pp.10–11
export const facilities = [
  "Fully functional warehouse for equipment storage, preparation and dispatch",
  "In-house technicians for pump maintenance, inspection, hose preparation and site support",
  "In-house structural steel and skid manufacturing for bases, pump packages and assemblies",
  "Pump assembly, testing and modification support",
  "Chemical storage and trading capability, subject to statutory and project requirements",
  "Project-ready fleet for flushing, testing, cleaning, filtration, dewatering, air and power",
];

export const qhse = [
  { title: "Quality", items: ["Method statements, ITPs and checklists to project scope", "Equipment inspection and readiness checks before mobilization", "Records for test results, flushing, chemical treatment and handover"] },
  { title: "Health & safety", items: ["Risk assessments and method statements for field activities", "Controlled pressurization, barricading, exclusion zones and hose restraint", "Safe operation of high-pressure and UHP water-jetting equipment"] },
  { title: "Environment", items: ["Chemical handling controls, PPE, SDS awareness and spill prevention", "Responsible handling of wastewater, chemical discharge and contaminated water", "Toolbox talks, supervision and an incident-prevention culture"] },
];

// Hydro's own references — HYDRO PREQUALIFICATION 2025 "Major Partial References".
// TODO: confirm publication permission for each named project / contractor.
export const references = [
  { year: "2022", name: "Beeah Headquarters, Sharjah", scope: "Chilled-water system flushing", relLabel: "Contracted by", rel: "Al Futtaim Engineering LLC" },
  { year: "2021", name: "Etihad Rail — Stage 2 & 3", scope: "CHW flushing & chemical treatment", relLabel: "Contracted by", rel: "Al Futtaim Engineering LLC" },
  { year: "2022", name: "JLT District Cooling Plants 1, 3 & 4", scope: "Chilled-water flushing", relLabel: "Contracted by", rel: "VWS Emirates LLC" },
  { year: "2021", name: "Expo 2020 — Service, Kuwait & GCC Pavilions", scope: "Chilled-water flushing", relLabel: "Contracted by", rel: "Al Futtaim Engineering · Sam Building Contracting" },
  { year: "2021", name: "Lulu Mall, Samnan, Sharjah", scope: "Chilled-water flushing", relLabel: "Contracted by", rel: "GECO Mechanical & Electrical" },
  { year: "2022", name: "Hessa Tower, Dubai", scope: "Chilled-water flushing", relLabel: "Client", rel: "Dubai International Real Estate" },
  { year: "2022", name: "The Sterling Tower, Business Bay", scope: "Flushing with temporary flushing system", relLabel: "Contracted by", rel: "Codes Construction LLC" },
  { year: "2021", name: "Jewel of Creek, Dubai", scope: "Chilled-water online flushing", relLabel: "Contracted by", rel: "Orama Contracting LLC" },
  { year: "2021", name: "Robot Park Tower", scope: "Automatic chemical dosing system & AMC", relLabel: "Client", rel: "Marfaa Real Estate" },
  { year: "2020", name: "Hilton Spa Resort", scope: "CHW chemical treatment & automatic dosing", relLabel: "Contracted by", rel: "Electro RAK LLC" },
  { year: "2019", name: "Al Raha Tower", scope: "Greywater treatment plant AMC", relLabel: "Client", rel: "Al Bonian Facilities Management" },
  { year: "2019", name: "Fairmont Al Quoz Accommodation", scope: "STP operation & maintenance", relLabel: "Client", rel: "Fairmont Dubai" },
  // historic (2008–2013)
  { year: "2010", name: "Dubai Metro — Red & Green Lines", scope: "Disinfection", relLabel: "Contracted by", rel: "ETA", historic: true },
  { year: "2010", name: "Gateway Towers, Palm Jumeirah", scope: "Disinfection of tanks & piping", relLabel: "Contracted by", rel: "ETA", historic: true },
  { year: "2012", name: "Princess Tower, Dubai", scope: "Chilled-water system flushing", relLabel: "Contracted by", rel: "Hitachi Plant JV", historic: true },
  { year: "2012", name: "Al Rakha — 300 m³/day STP", scope: "STP supply, installation & commissioning", relLabel: "Client", rel: "Sorouh", historic: true },
  { year: "2010", name: "Discovery Group — 400 m³/day STP", scope: "STP supply, installation & commissioning", relLabel: "Client", rel: "Discovery Group", historic: true },
  { year: "2011", name: "Union Paper Mills", scope: "Industrial wastewater treatment & chemicals", relLabel: "Client", rel: "Union Paper Mills", historic: true },
  { year: "2012", name: "Oberoi Centre, Dubai", scope: "Chilled & condenser water flushing", relLabel: "Contracted by", rel: "Transgulf", historic: true },
];

// GROUP experience — Island Tower Electromechanical Works LLC (est. 2003), sister company in Island Tower Group.
// Selected from its 137-job flushing reference list. Always labelled as group experience on the site.
export const groupReferences = [
  { name: "Mall of the Emirates", scope: "CHW flushing", sector: "Retail" },
  { name: "DIFC, Dubai", scope: "CHW flushing", sector: "Commercial" },
  { name: "Burj Dubai DCP 3 & Sector 44", scope: "CHW flushing", sector: "District cooling" },
  { name: "Palm Jumeirah DCP networks & trunk", scope: "Hydrotesting & flushing", sector: "District cooling" },
  { name: "Discovery Gardens DCP network", scope: "Hydrotesting & flushing", sector: "District cooling" },
  { name: "Dubai Festival City", scope: "CHW flushing & cleaning", sector: "Mixed use" },
  { name: "Dubai World Trade Centre", scope: "Condenser water flushing", sector: "Commercial" },
  { name: "Presidential Palace, Abu Dhabi", scope: "CHW pipe flushing", sector: "Government" },
  { name: "Etihad Airways", scope: "CHW flushing", sector: "Aviation" },
  { name: "Abu Dhabi Airport — MTB", scope: "CHW flushing", sector: "Aviation" },
  { name: "Dubai Tram", scope: "Flushing works", sector: "Infrastructure" },
  { name: "Ferrari World, Abu Dhabi", scope: "Flushing", sector: "Leisure" },
  { name: "Masdar City", scope: "Flushing", sector: "Infrastructure" },
  { name: "Al Maryah Island (Tabreed)", scope: "Flushing works", sector: "District cooling" },
  { name: "Mafraq Hospital", scope: "CHW flushing", sector: "Healthcare" },
  { name: "ADNOC Guest House, Ruwais", scope: "Chilled water flushing", sector: "Energy" },
  { name: "Business Bay DCP 05 (Empower)", scope: "Complete CHW & condenser flushing", sector: "District cooling" },
  { name: "Za’abeel DCP (Empower)", scope: "Complete CHW & condenser flushing", sector: "District cooling" },
  { name: "Etisalat Data Centre, Khalifa City", scope: "Chilled water flushing", sector: "Data centre" },
  { name: "Dubai Hills Mall", scope: "Chilled water flushing", sector: "Retail" },
  { name: "IKEA Big Box Retail Park", scope: "CHW flushing", sector: "Retail" },
  { name: "Beeah Headquarters", scope: "CHW flushing", sector: "Commercial" },
  { name: "VIP Terminal, Dubai South", scope: "Flushing", sector: "Aviation" },
  { name: "Downtown Dubai expansion", scope: "Chilled water flushing", sector: "Mixed use" },
];

export const groupStats = [
  { v: "137+", k: "flushing jobs in the group reference list" },
  { v: "2003", k: "Island Tower Electromechanical established" },
  { v: "1,600 m³/h", k: "largest electric flushing pump in the group fleet" },
  { v: "1 µm", k: "finest filtration on group bag-filter skids" },
];

// Group flushing fleet — Island Tower Electromechanical "Company Owned Tools & Equipments"
export const groupFleet = [
  { item: "Diesel flushing pumps", spec: "Up to 1,200 m³/h @ 8 bar; 600 m³/h units", use: "Network & DCP flushing without site power" },
  { item: "Electric flushing pumps", spec: "Up to 1,600 m³/h, 250 kW", use: "High-velocity flushing of large-bore CHW mains" },
  { item: "Bag-filter skids", spec: "350–1,000 m³/h, down to 1 micron", use: "Side-stream and staged filtration" },
  { item: "Temporary water tanks", spec: "25 m³", use: "Make-up, circulation and transfer" },
  { item: "Generators", spec: "Diesel, sized to pump packages", use: "Temporary power for flushing & testing" },
  { item: "Ultrasonic flow meters", spec: "Clamp-on", use: "Flushing velocity verification" },
  { item: "Water-quality instruments", spec: "Spectrophotometers & test kits", use: "Turbidity, iron and chemistry checks" },
  { item: "HDPE welding machines", spec: "Butt-fusion", use: "Temporary loops and bypass pipework" },
];

// Organisations named in Hydro's own reference list (text only — no logos without permission)
export const clients = [
  "Al Futtaim Engineering", "EMAAR", "DAMAC", "Trane", "Electro RAK", "GECO Mechanical & Electrical",
  "VWS Emirates", "China Railway 18th Bureau", "BinLadin Contracting", "Sorouh", "Union Paper Mills", "Fairmont Dubai",
];

// Industries & client sectors — profile p.10
export const environments = [
  { n: "01", title: "District Cooling & Thermal Utilities", text: "Chilled water networks, ETS works, DCP systems, flushing, filtration, hydrotesting and commissioning support." },
  { n: "02", title: "Industrial Manufacturing", text: "Factory utilities, process piping, compressed air, water, steam, chemical and gas systems." },
  { n: "03", title: "Water & Wastewater", text: "RO, STP, desalination, contaminated water, filtration and suspended-solids treatment." },
  { n: "04", title: "Infrastructure & Utilities", text: "Pipeline systems, utility corridors, temporary pumping, pressure testing and commissioning." },
  { n: "05", title: "Food & Hygienic Process", text: "Hygienic process piping, process cleaning, utility connections and commissioning assistance." },
  { n: "06", title: "Warehouses & Factory Conversions", text: "Converting warehouse space into operational industrial facilities with utilities and process services." },
  { n: "07", title: "Energy & Industrial Support", text: "Boiler cleaning, heavy fuel line flushing, plant utility systems and shutdown support." },
  { n: "08", title: "Commercial & Building Systems", text: "Building flushing, pump systems, filtration, chemical treatment and hydrotesting." },
];

export const productRanges = [
  {
    n: "01", id: "equipment", title: "Sales & Rental Fleet",
    text: "Engineered pump packages, diesel and electric pumps, flushing and filtration skids, hydrotest pumps, generators, compressors, dewatering pumps, tanks and water-jetting equipment — selected, assembled and supported by our technicians.",
    tags: ["Pump packages", "Flushing skids", "Filtration skids", "Generators", "Compressors", "UHP"],
    link: "View the fleet",
    image: u("1579525612525-053cd3e8cbd7", 1100),
  },
  {
    n: "02", id: "chemicals", title: "Chemicals & Supply",
    text: "Flushing, cleaning, descaling, passivation, biocide and corrosion-control chemistry, plus dosing system support — chosen for the pipe material, contamination type and disposal constraints.",
    tags: ["Cleaning", "Descaling", "Passivation", "Biocide", "Corrosion control", "Dosing"],
    link: "View chemicals",
    image: u("1526599256864-6bedb9d7dfb5", 1100),
  },
];

// Water-treatment chemical codes still supplied (HYDRO PQ 2025, pp.22–24)
export const chemicalGroups = [
  { title: "Chilled water", items: [["INDION 5547C", "Nitrite-based scale & corrosion inhibitor, closed loop"], ["INDION 9020", "Iron dispersant for flushing & cleaning"], ["INDION 9079", "CHW dispersant"], ["INDION 9040", "Biocide, CHW & condenser water"], ["INDION 7106", "Biocide, diamine based"]] },
  { title: "Boiler water", items: [["INDION 1461", "Multipurpose boiler treatment"], ["INDION 2144", "Antiscalant & sludge conditioner"], ["INDION 162", "Oxygen scavenger"], ["INDION R-101", "Condensate & steam return line treatment"], ["INDION 1507", "Acid descaler"], ["INDION 1103", "Alkaline cleaner, neutralising & passivation"]] },
  { title: "Cooling towers", items: [["INDION 8176", "Scale & corrosion inhibitor, condenser water"], ["INDION 9087", "Biocide, DBNPA based"], ["INDION 1591", "Biocide, quat based"], ["INDION 1493", "Oxidising biocide, bromine based"]] },
  { title: "RO plants", items: [["INDION 8110", "RO antiscalant"], ["INDION 2811", "RO acidic cleaner"], ["INDION 2814", "RO alkaline cleaner"], ["INDION 2826", "RO biocide"]] },
  { title: "Potable & sewage", items: [["INDION 3591", "Potable water corrosion inhibitor"], ["INDION SHC", "Chlorine releasing"], ["INDION ODC-100", "STP odour control"], ["INDION Hifloc", "Cationic liquid coagulant"], ["INDION DF 110", "Defoamer"]] },
];

// Chemical functions — profile p.9
export const chemicalFunctions = [
  { title: "Pre-cleaning", text: "Removal of loose contamination, oil, grease, mill scale, deposits, construction debris and suspended solids." },
  { title: "Descaling", text: "Chemical removal of scale, hardness deposits, corrosion products and mineral build-up." },
  { title: "Degreasing", text: "Removal of oil and grease contamination from pipework, tanks and process systems." },
  { title: "Chemical pickling & passivation", text: "Oxide removal and protective metal surface conditions after cleaning, where specified and compatible." },
  { title: "Biocide & disinfection", text: "Microbial control and chemical disinfection of applicable water systems." },
  { title: "Neutralization", text: "pH adjustment and neutralization of cleaning fluids or system water before disposal." },
  { title: "Corrosion control", text: "Inhibitor dosing, preservation and chemistry control to reduce corrosion risk." },
];

export const documents = [
  { title: "Pre-Qualification & Capability Profile", meta: "PDF · Public edition" },
  { title: "Equipment list with capacities", meta: "PDF · Sales & rental fleet" },
  { title: "Method statements & sample ITPs", meta: "On request · Flushing, hydrotest, chemical cleaning" },
];

// FAQ — visible on /resources and published as FAQPage structured data.
export const faqs = [
  {
    q: "What does a chem-mechanical process engineering company do?",
    a: "Hydro Environmental & Engineering Services LLC (HEES) combines chemical engineering, mechanical engineering, fluid dynamics and field execution. We engineer, assemble, execute, test, commission, optimize and maintain critical fluid, process and utility systems — so pipelines, district cooling networks, plants and factories are clean, pressure-tested and ready for operation.",
  },
  {
    q: "Do you provide chilled water flushing for district cooling in the UAE?",
    a: "Yes. We plan flushing velocity and circulation, deploy temporary pumps and side-stream filtration, and carry out pre-flush, dynamic flush, chemical cleaning support, disinfection and final flushing for district cooling networks, ETS, DCP internal piping and building CHW systems — with readiness reports for client acceptance.",
  },
  {
    q: "What is pipeline pre-commissioning?",
    a: "Pre-commissioning covers everything needed before a pipeline or piping system is placed into service: cleaning and flushing, filling, hydrotesting, leak testing, dewatering support, filtration, disinfection, chemical cleaning or pickling, and commissioning assistance — documented with pressure charts, flushing logs and water quality reports.",
  },
  {
    q: "Do you carry out hydrotesting and leak testing?",
    a: "Yes. We pressure-test pipelines, process piping, tanks and utility systems with hydrotest pumps, calibrated gauges and chart recorders, under controlled pressurization, barricading and hose restraint, and verify flanges, valves, joints and system boundaries for leaks.",
  },
  {
    q: "Can I rent flushing pumps, filtration skids or generators?",
    a: "Yes. Our sales and rental division supplies engineered pump packages, diesel and electric pumps, flushing and filtration skids, hydrotest pumps, generators, air compressors and dryers, dewatering and submersible pumps, tanks and water-jetting equipment — selected and supported to your hydraulic requirement, with operators if needed.",
  },
  {
    q: "What chemical cleaning services do you offer?",
    a: "Pre-cleaning, descaling, degreasing, chemical pickling, passivation support, biocide treatment and disinfection, corrosion control and pH neutralization of pipelines, tanks and process systems. Chemistry is selected for the pipe material, contamination type, process risk and disposal constraints.",
  },
  {
    q: "Do you provide industrial cleaning and hydro-demolition?",
    a: "Yes — aquajetting, high-pressure and ultra-high-pressure (UHP) water jetting, concrete hydro-demolition and hydro-cutting, heat exchanger and condenser tube bundle cleaning, sand and wet abrasive blasting, and protective coating support for steel and concrete assets.",
  },
  {
    q: "Which areas do you serve and how do I request a quotation?",
    a: "We support projects across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Share the system type, pipe sizes or volume, location and required scope by email at info@heesllc.ae or by phone, and our engineers will propose a method and equipment package.",
  },
];

export const footerLinks = [
  { heading: "Divisions", links: [["Process & pipeline", "/solutions/process-pipeline-engineering"], ["District cooling", "/solutions/district-cooling"], ["Industrial utilities", "/solutions/industrial-process-utilities"], ["Water & wastewater", "/solutions/water-wastewater"], ["Industrial cleaning", "/solutions/industrial-cleaning"], ["Chemical treatment", "/solutions/chemical-treatment"]] },
  { heading: "Equipment", links: [["Sales & rental fleet", "/products/equipment"], ["Chemicals & supply", "/products/chemicals"], ["Equipment engineering", "/solutions/equipment-engineering"], ["Resources", "/resources"]] },
  { heading: "Company", links: [["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"], ["Privacy", "/privacy"]] },
] as const;

export const heroVideo = "";
export const heroImage = u("1535868118629-f37bcd69ff59", 2400);
export const statementImage = u("1533163238111-4a7ced54f2e4", 2000);
export const ctaImage = u("1468657988500-aca2be09f4c6", 2000);
// Inner-page banners — one photo per page so no two banners look the same
export const aboutImage = u("1513828583688-c52646db42da", 2200); // stainless process plant
export const resourcesImage = u("1581092160562-40aa08e78837", 2200); // engineer over technical drawings
export const contactImage = u("1504917595217-d4dc5ebe6122", 2200); // field work, welding sparks

// Full-width parallax image band on the About page (<ParallaxBand />)
export const bands = {
  about: { image: u("1620203853151-496c7228306c", 1800), label: "Our promise", text: "Clean, tested, reliable — and ready for operation." },
};
