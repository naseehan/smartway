export interface Service {
  id: string;
  slug: string;
  title: string;
  tag: string;
  description: string;
  details: string[];
  image: string;
  features: string[];
  seoKeywords: string[];
}

export const services: Service[] = [
  {
    id: "01",
    slug: "nephro-care",
    title: "Nephro Care Infrastructure",
    tag: "Life Support",
    description: "End-to-end renal care solutions including advanced hemodialysis systems, high-flux dialyzers, consumables, and dialysis unit setups for hospitals across Kerala and India.",
    details: [
      "State-of-the-art Hemodialysis Machines with automated monitoring",
      "Biocompatible high-flux & low-flux Polynephron dialyzers (Elisio series)",
      "Dialysis chairs, automated bicarbonate mixers, and blood tubings",
      "Medical-grade dialysate concentrates and acid-bicarbonate solutions",
      "Turnkey dialysis department planning, layout architecture, and water treatment setup"
    ],
    image: "/assets/images/services/nephro.png",
    features: [
      "Certified Clinical Standards",
      "Emergency Supply Line in Kerala & Ernakulam",
      "Turnkey Project Execution",
      "Biomedical Engineering Support"
    ],
    seoKeywords: [
      "Nephro Care Equipment Kerala",
      "Dialysis Machine Dealers Ernakulam",
      "Hemodialysis Suppliers India",
      "Dialyzer Distributors Kochi",
      "Turnkey Dialysis Units Kerala"
    ]
  },
  {
    id: "02",
    slug: "general-hospital-supplies",
    title: "General Hospital Supplies",
    tag: "Clinical Essentials",
    description: "Reliable bulk distribution of certified hospital consumables, surgical disposables, patient care equipment, and clinical safety gear to leading healthcare institutions.",
    details: [
      "IV Cannulas, extension lines, three-way stopcocks, and IV infusion sets",
      "Precision safety syringes, insulin syringes, and clinical needles",
      "Hospital grade surface disinfectants (Clorosurf 1000) and sanitization",
      "Elastomeric infusion pumps (SureFuser) and vascular access devices",
      "Direct wholesale supply chain to clinics, medical colleges, and specialty hospitals"
    ],
    image: "/assets/images/services/supplies.png",
    features: [
      "ISO & CE Certified Products",
      "Bulk Wholesale Hospital Pricing",
      "Rapid Same-Day Dispatch in Ernakulam/Kochi",
      "Reliable Stock Inventory"
    ],
    seoKeywords: [
      "Hospital Supplies Dealers Kerala",
      "Medical Consumables Distributor Ernakulam",
      "Surgical Equipment Dealers India",
      "Clinical Disposables Kochi",
      "Health Care Product Distributors India"
    ]
  },
  {
    id: "03",
    slug: "ivd-products",
    title: "IVD Products & Clinical Diagnostics",
    tag: "Precision Laboratory",
    description: "In-vitro diagnostic instrumentation, automated analyzers, and high-sensitivity ELISA & CLIA test kits in strategic collaboration with top manufacturers like J. Mitra & Co.",
    details: [
      "Chemiluminescence Immunoassay (CLIA-2000) automated analyzers",
      "Microplate ELISA Readers & Washers with smart data management",
      "Extensive diagnostic test kits: Dengue NS1/IgG/IgM, Chikungunya, Celiac, COVID-19",
      "Hormone & vitamin panels: Prolactin, Progesterone, Ferritin, Vitamin B12, Beta-hCG",
      "Complete pathology laboratory setup, validation, and calibration"
    ],
    image: "/assets/images/services/ivd.png",
    features: [
      "J. Mitra & Co. Diagnostic Collaboration",
      "High Diagnostic Sensitivity & Specificity",
      "Cold Chain Logistics Guaranteed",
      "Laboratory Application Training"
    ],
    seoKeywords: [
      "IVD Products Distributors Kerala",
      "Diagnostic Equipment Dealers Ernakulam",
      "ELISA Reader Suppliers India",
      "Rapid Test Kits Kochi",
      "Pathology Lab Equipment Dealers"
    ]
  },
  {
    id: "04",
    slug: "spare-parts-and-maintenance",
    title: "Spare Parts & Biomedical Maintenance",
    tag: "Engineering Continuity",
    description: "High-precision replacement components, OEM-grade spare parts, and certified maintenance services to maintain 100% clinical operational uptime.",
    details: [
      "Stainless steel Quick Release Couplers (QRC) & specialized medical couplers",
      "Precision helical gears, motor components, and electronic sensor boards",
      "Transducer protectors, blood pump parts, and fluidic manifolds",
      "24/7 on-call biomedical engineering breakdown assistance",
      "Scheduled preventive maintenance contracts (AMC / CMC) for hospitals"
    ],
    image: "/assets/images/services/maintenance.png",
    features: [
      "OEM-Grade Precision Engineering",
      "Rapid Emergency Breakdown Response",
      "Comprehensive AMC / CMC Packages",
      "Extensive Local Spare Inventory in Kochi"
    ],
    seoKeywords: [
      "Medical Equipment Spare Parts Kerala",
      "Biomedical Engineering Services Ernakulam",
      "Dialysis Machine Maintenance India",
      "Medical Coupler Suppliers Kochi",
      "Clinical Infrastructure Maintenance"
    ]
  },
  {
    id: "05",
    slug: "turnkey-clinical-infrastructure",
    title: "Turnkey Clinical Infrastructure",
    tag: "Facility Architecture",
    description: "Complete architectural planning, commissioning, and validation of specialized medical facilities, hemodialysis centers, RO water plants, and hospital wastewater treatment.",
    details: [
      "Comprehensive Dialysis Unit Architecture: zoning, plumbing, power redundancy",
      "High-efficiency Double-Pass Reverse Osmosis (RO) plants meeting AAMI renal standards",
      "Specialized Hospital Sewage Treatment Plants (STP) & biomedical effluent plants",
      "Regulatory compliance documentation and biomedical clearance assistance",
      "Staff orientation and technician operation training programs"
    ],
    image: "/assets/images/medical-setup.jpg",
    features: [
      "Turnkey Execution from Concept to Commissioning",
      "AAMI / ISO Water Quality Compliance",
      "Custom Facility Engineering",
      "80+ Healthcare Facilities Setup Experience"
    ],
    seoKeywords: [
      "Turnkey Dialysis Setup Kerala",
      "Medical Infrastructure Contractors Ernakulam",
      "Hospital RO Plant Manufacturers India",
      "Clinical Sewage Treatment Plants Kerala",
      "Medical Facility Setup Consultants"
    ]
  }
];
