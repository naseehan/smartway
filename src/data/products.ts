export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Nephro Care" | "IVD Products" | "General Hospital Supplies" | "Technical Engineering";
  subCategory: string;
  description: string;
  image: string;
  /** Manufacturer, used as the schema.org brand. Leave unset if unknown. */
  brand?: string;
  specs: string[];
  seoDescription: string;
  seoKeywords: string[];
}

export const products: Product[] = [
  {
    "id": "p1",
    "name": "Bicarbonate Mixture DIA-MIX",
    "category": "Nephro Care",
    "subCategory": "Equipment Range",
    "description": "High-quality bicarbonate mixture for precise dialysis fluid preparation.",
    "image": "/assets/images/products/bicard-mixer.jpg",
    "specs": [
      "Pure Grade",
      "Dialysis Grade",
      "Consistent Mix"
    ],
    "slug": "bicarbonate-mixture-dia-mix",
    "seoDescription": "Bicarbonate Mixture DIA-MIX available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-quality bicarbonate mixture for precise dialysis fluid preparation.",
    "seoKeywords": [
      "Bicarbonate Mixture DIA-MIX",
      "Bicarbonate Mixture DIA-MIX Kerala",
      "Bicarbonate Mixture DIA-MIX Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Equipment Range"
    ]
  },
  {
    "id": "p2",
    "name": "Elisio-HX",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Advanced polynephron dialyzer designed for superior clearance and biocompatibility.",
    "image": "/assets/images/products/elisio-hx.png",
    "brand": "Nipro",
    "specs": [
      "High-Flux",
      "BPA Free",
      "Enhanced Clearance"
    ],
    "slug": "elisio-hx",
    "seoDescription": "Elisio-HX available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Advanced polynephron dialyzer designed for superior clearance and biocompatibility.",
    "seoKeywords": [
      "Elisio-HX",
      "Elisio-HX Kerala",
      "Elisio-HX Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p3",
    "name": "Dialysis Tourniquet",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Precision tourniquet designed specifically for dialysis access management.",
    "image": "/assets/images/products/dialysis-tourniquet.jpg",
    "specs": [
      "Latex Free",
      "Adjustable",
      "Sterile"
    ],
    "slug": "dialysis-tourniquet",
    "seoDescription": "Dialysis Tourniquet available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision tourniquet designed specifically for dialysis access management.",
    "seoKeywords": [
      "Dialysis Tourniquet",
      "Dialysis Tourniquet Kerala",
      "Dialysis Tourniquet Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p4",
    "name": "Dialysis Chair",
    "category": "Nephro Care",
    "subCategory": "Equipment Range",
    "description": "Ergonomic treatment chair optimized for multi-hour dialysis sessions.",
    "image": "/assets/images/products/dialysis-chair.jpg",
    "specs": [
      "Multi-Position",
      "Memory Foam",
      "Easy Sanitize"
    ],
    "slug": "dialysis-chair",
    "seoDescription": "Dialysis Chair available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Ergonomic treatment chair optimized for multi-hour dialysis sessions.",
    "seoKeywords": [
      "Dialysis Chair",
      "Dialysis Chair Kerala",
      "Dialysis Chair Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Equipment Range"
    ]
  },
  {
    "id": "p5",
    "name": "Blood Tubing Set",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Medical-grade tubing systems for secure and efficient extracorporeal circulation.",
    "image": "/assets/images/products/blood-tubing.jpg",
    "specs": [
      "DEHP Free",
      "Color Coded",
      "Universal Fit"
    ],
    "slug": "blood-tubing-set",
    "seoDescription": "Blood Tubing Set available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Medical-grade tubing systems for secure and efficient extracorporeal circulation.",
    "seoKeywords": [
      "Blood Tubing Set",
      "Blood Tubing Set Kerala",
      "Blood Tubing Set Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p6",
    "name": "Heparin Injection",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Essential anticoagulant solution for preventing clotting during extracorporeal procedures.",
    "image": "/assets/images/products/heparin-injection.png",
    "specs": [
      "Multiple Strengths",
      "Precise Dosing",
      "Clinical Grade"
    ],
    "slug": "heparin-injection",
    "seoDescription": "Heparin Injection available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Essential anticoagulant solution for preventing clotting during extracorporeal procedures.",
    "seoKeywords": [
      "Heparin Injection",
      "Heparin Injection Kerala",
      "Heparin Injection Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p7",
    "name": "SW001 Helical Gears",
    "category": "Technical Engineering",
    "subCategory": "Medical Components",
    "description": "Precision-engineered helical gears for high-performance medical machinery.",
    "image": "/assets/images/products/helical-gears.jpg",
    "specs": [
      "Low Noise",
      "High Torque",
      "Medical Grade Steel"
    ],
    "slug": "sw001-helical-gears",
    "seoDescription": "SW001 Helical Gears available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision-engineered helical gears for high-performance medical machinery.",
    "seoKeywords": [
      "SW001 Helical Gears",
      "SW001 Helical Gears Kerala",
      "SW001 Helical Gears Ernakulam",
      "Technical Engineering suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Medical Components"
    ]
  },
  {
    "id": "p8",
    "name": "Medi Coupler Plug",
    "category": "Technical Engineering",
    "subCategory": "Connectors",
    "description": "Specially designed medical-grade coupler plugs for leak-proof connections.",
    "image": "/assets/images/products/medi-coupler.jpg",
    "specs": [
      "Quick Connect",
      "Secure Lock",
      "High Pressure Rated"
    ],
    "slug": "medi-coupler-plug",
    "seoDescription": "Medi Coupler Plug available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Specially designed medical-grade coupler plugs for leak-proof connections.",
    "seoKeywords": [
      "Medi Coupler Plug",
      "Medi Coupler Plug Kerala",
      "Medi Coupler Plug Ernakulam",
      "Technical Engineering suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Connectors"
    ]
  },
  {
    "id": "p9",
    "name": "Medical Grade QRC (Custom)",
    "category": "Technical Engineering",
    "subCategory": "Fluid Control",
    "description": "Customized Quick Release Couplers for specialized healthcare applications.",
    "image": "/assets/images/products/qrc-custom.jpg",
    "specs": [
      "Bespoke Design",
      "Bio-Compatible",
      "Rapid Engagement"
    ],
    "slug": "medical-grade-qrc-custom",
    "seoDescription": "Medical Grade QRC (Custom) available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Customized Quick Release Couplers for specialized healthcare applications.",
    "seoKeywords": [
      "Medical Grade QRC (Custom)",
      "Medical Grade QRC (Custom) Kerala",
      "Medical Grade QRC (Custom) Ernakulam",
      "Technical Engineering suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Fluid Control"
    ]
  },
  {
    "id": "p100",
    "name": "Dialysate Coupler",
    "category": "Technical Engineering",
    "subCategory": "Connectors",
    "description": "Precision-engineered surgical-grade stainless steel coupler for secure and efficient dialysate fluid management.",
    "image": "/assets/dialysate coupler-dtgqfiih.png",
    "specs": [
      "Stainless Steel",
      "Leak-Proof",
      "Clover Logo Etched"
    ],
    "slug": "dialysate-coupler",
    "seoDescription": "Dialysate Coupler available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision-engineered surgical-grade stainless steel coupler for secure and efficient dialysate fluid management.",
    "seoKeywords": [
      "Dialysate Coupler",
      "Dialysate Coupler Kerala",
      "Dialysate Coupler Ernakulam",
      "Technical Engineering suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Connectors"
    ]
  },
  {
    "id": "p10",
    "name": "Glucometer Test Strips",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "High-accuracy test strips for reliable blood glucose monitoring.",
    "image": "/assets/images/products/glucometer-strips.jpg",
    "specs": [
      "Fast Results",
      "Mini Sample Size",
      "Long Shelf Life"
    ],
    "slug": "glucometer-test-strips",
    "seoDescription": "Glucometer Test Strips available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-accuracy test strips for reliable blood glucose monitoring.",
    "seoKeywords": [
      "Glucometer Test Strips",
      "Glucometer Test Strips Kerala",
      "Glucometer Test Strips Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p11",
    "name": "Elisa Reader",
    "category": "IVD Products",
    "subCategory": "Instrumentation",
    "description": "Advanced microplate reader for enzymatic and immunoassay analysis.",
    "image": "/assets/images/products/elisa-reader.webp",
    "specs": [
      "UV-Vis Range",
      "High Throughput",
      "Smart Data Management"
    ],
    "slug": "elisa-reader",
    "seoDescription": "Elisa Reader available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Advanced microplate reader for enzymatic and immunoassay analysis.",
    "seoKeywords": [
      "Elisa Reader",
      "Elisa Reader Kerala",
      "Elisa Reader Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Instrumentation"
    ]
  },
  {
    "id": "p12",
    "name": "STP Plant",
    "category": "Nephro Care",
    "subCategory": "Facility Systems",
    "description": "Dedicated Sewage Treatment Plants for clinical and dialysis center infrastructure.",
    "image": "/assets/images/products/stp-plant.png",
    "specs": [
      "Bio-Membrane Tech",
      "Compact Design",
      "Zero Discharge"
    ],
    "slug": "stp-plant",
    "seoDescription": "STP Plant available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Dedicated Sewage Treatment Plants for clinical and dialysis center infrastructure.",
    "seoKeywords": [
      "STP Plant",
      "STP Plant Kerala",
      "STP Plant Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Facility Systems"
    ]
  },
  {
    "id": "p13",
    "name": "Elisa Washer",
    "category": "IVD Products",
    "subCategory": "Instrumentation",
    "description": "Automated microplate washer for reliable diagnostic laboratory workflows.",
    "image": "/assets/images/products/elisa-washer.webp",
    "specs": [
      "Multipoint Wash",
      "Residual Limit Control",
      "Self-Cleaning"
    ],
    "slug": "elisa-washer",
    "seoDescription": "Elisa Washer available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Automated microplate washer for reliable diagnostic laboratory workflows.",
    "seoKeywords": [
      "Elisa Washer",
      "Elisa Washer Kerala",
      "Elisa Washer Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Instrumentation"
    ]
  },
  {
    "id": "p14",
    "name": "CLIA-2000 Analyzer",
    "category": "IVD Products",
    "subCategory": "Instrumentation",
    "description": "Ultra-fast Chemiluminescence Immunoassay system for diagnostic laboratories.",
    "image": "/assets/images/products/clia-2000.webp",
    "specs": [
      "200 Tests/Hour",
      "High Sensitivity",
      "Cloud Integrated"
    ],
    "slug": "clia-2000-analyzer",
    "seoDescription": "CLIA-2000 Analyzer available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Ultra-fast Chemiluminescence Immunoassay system for diagnostic laboratories.",
    "seoKeywords": [
      "CLIA-2000 Analyzer",
      "CLIA-2000 Analyzer Kerala",
      "CLIA-2000 Analyzer Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Instrumentation"
    ]
  },
  {
    "id": "p15",
    "name": "Celiac Microlisa Kit",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Specialized Elisa test kit for high-precision diagnostic screening.",
    "image": "/assets/images/products/celiac-microlisa.webp",
    "specs": [
      "High Specificity",
      "Ready to Use",
      "Validated Results"
    ],
    "slug": "celiac-microlisa-kit",
    "seoDescription": "Celiac Microlisa Kit available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Specialized Elisa test kit for high-precision diagnostic screening.",
    "seoKeywords": [
      "Celiac Microlisa Kit",
      "Celiac Microlisa Kit Kerala",
      "Celiac Microlisa Kit Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p16",
    "name": "Covid-19 Antigen Card",
    "category": "IVD Products",
    "subCategory": "Rapid Tests",
    "description": "Rapid antigen testing card providing quick and accurate COVID-19 results.",
    "image": "/assets/images/products/covid-antigen.webp",
    "specs": [
      "15 Min Results",
      "High Accuracy",
      "Point of Care"
    ],
    "slug": "covid-19-antigen-card",
    "seoDescription": "Covid-19 Antigen Card available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Rapid antigen testing card providing quick and accurate COVID-19 results.",
    "seoKeywords": [
      "Covid-19 Antigen Card",
      "Covid-19 Antigen Card Kerala",
      "Covid-19 Antigen Card Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Rapid Tests"
    ]
  },
  {
    "id": "p17",
    "name": "Acid Bicarb Concentrate",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "High-purity liquid concentrate for hemodialysis machines.",
    "image": "/assets/images/products/acid-bicarb.png",
    "specs": [
      "Consistent pH",
      "Standard Dilution",
      "Long Life"
    ],
    "slug": "acid-bicarb-concentrate",
    "seoDescription": "Acid Bicarb Concentrate available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-purity liquid concentrate for hemodialysis machines.",
    "seoKeywords": [
      "Acid Bicarb Concentrate",
      "Acid Bicarb Concentrate Kerala",
      "Acid Bicarb Concentrate Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p18",
    "name": "SureFuser Infusion Pump",
    "category": "General Hospital Supplies",
    "subCategory": "Medical Equipment",
    "description": "Portable elastomeric pump for controlled drug and fluid delivery.",
    "image": "/assets/images/products/surefuser-pump.webp",
    "specs": [
      "Disposable",
      "Gravity Independent",
      "Constant Flow"
    ],
    "slug": "surefuser-infusion-pump",
    "seoDescription": "SureFuser Infusion Pump available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Portable elastomeric pump for controlled drug and fluid delivery.",
    "seoKeywords": [
      "SureFuser Infusion Pump",
      "SureFuser Infusion Pump Kerala",
      "SureFuser Infusion Pump Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Medical Equipment"
    ]
  },
  {
    "id": "p19",
    "name": "Insulin Safety Syringes",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "Precision insulin delivery systems designed for safety and accuracy.",
    "image": "/assets/images/products/insulin-syringe.png",
    "specs": [
      "Safety Needle",
      "Ultra-Fine",
      "Clear Markings"
    ],
    "slug": "insulin-safety-syringes",
    "seoDescription": "Insulin Safety Syringes available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision insulin delivery systems designed for safety and accuracy.",
    "seoKeywords": [
      "Insulin Safety Syringes",
      "Insulin Safety Syringes Kerala",
      "Insulin Safety Syringes Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p20",
    "name": "Packed Clinical Needles",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "Individually packed sterile needles for general clinical use.",
    "image": "/assets/images/products/clinical-needles.png",
    "specs": [
      "Triple Bevel",
      "Siliconized",
      "Pyrogen Free"
    ],
    "slug": "packed-clinical-needles",
    "seoDescription": "Packed Clinical Needles available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Individually packed sterile needles for general clinical use.",
    "seoKeywords": [
      "Packed Clinical Needles",
      "Packed Clinical Needles Kerala",
      "Packed Clinical Needles Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p21",
    "name": "Chikungunya IgM Microlisa",
    "category": "IVD Products",
    "subCategory": "Rapid Tests",
    "description": "Specialized ELISA test kit for high-sensitivity detection of Chikungunya IgM antibodies.",
    "image": "/assets/images/products/chikungunya-microlisa.webp",
    "specs": [
      "High Specificity",
      "Ready to Use",
      "Validated Results"
    ],
    "slug": "chikungunya-igm-microlisa",
    "seoDescription": "Chikungunya IgM Microlisa available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Specialized ELISA test kit for high-sensitivity detection of Chikungunya IgM antibodies.",
    "seoKeywords": [
      "Chikungunya IgM Microlisa",
      "Chikungunya IgM Microlisa Kerala",
      "Chikungunya IgM Microlisa Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Rapid Tests"
    ]
  },
  {
    "id": "p22",
    "name": "Prolactin iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Chemiluminescence Immunoassay for precise Prolactin level measurement in diagnostic labs.",
    "image": "/assets/images/products/prolactin-iclia.webp",
    "specs": [
      "High Sensitivity",
      "Rapid Turnaround",
      "Fully Automated"
    ],
    "slug": "prolactin-iclia",
    "seoDescription": "Prolactin iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Chemiluminescence Immunoassay for precise Prolactin level measurement in diagnostic labs.",
    "seoKeywords": [
      "Prolactin iClia",
      "Prolactin iClia Kerala",
      "Prolactin iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p23",
    "name": "Progesterone iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Chemiluminescence Immunoassay for accurate Progesterone detection.",
    "image": "/assets/images/products/progesterone-iclia.webp",
    "specs": [
      "Quantitative Analysis",
      "High Accuracy",
      "Clinically Validated"
    ],
    "slug": "progesterone-iclia",
    "seoDescription": "Progesterone iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Chemiluminescence Immunoassay for accurate Progesterone detection.",
    "seoKeywords": [
      "Progesterone iClia",
      "Progesterone iClia Kerala",
      "Progesterone iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p24",
    "name": "βHCG iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Automated iClia assay for rapid and precise βHCG level assessment.",
    "image": "/assets/images/products/bhcg-iclia.webp",
    "specs": [
      "Wide Dynamic Range",
      "Fast Processing",
      "Reliable Detection"
    ],
    "slug": "hcg-iclia",
    "seoDescription": "βHCG iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Automated iClia assay for rapid and precise βHCG level assessment.",
    "seoKeywords": [
      "βHCG iClia",
      "βHCG iClia Kerala",
      "βHCG iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p25",
    "name": "Dengue IgG iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Chemiluminescence Immunoassay for the detection of Dengue IgG antibodies.",
    "image": "/assets/images/products/dengue-igg-iclia.webp",
    "specs": [
      "Dual-Antibody Tech",
      "High Throughput",
      "Automated Workflow"
    ],
    "slug": "dengue-igg-iclia",
    "seoDescription": "Dengue IgG iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Chemiluminescence Immunoassay for the detection of Dengue IgG antibodies.",
    "seoKeywords": [
      "Dengue IgG iClia",
      "Dengue IgG iClia Kerala",
      "Dengue IgG iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p26",
    "name": "Dengue IgM iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Precision iClia assay for early detection of Dengue IgM antibodies.",
    "image": "/assets/images/products/dengue-igm-iclia.webp",
    "specs": [
      "Early Detection",
      "Superior Specificity",
      "Standardized Protocol"
    ],
    "slug": "dengue-igm-iclia",
    "seoDescription": "Dengue IgM iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision iClia assay for early detection of Dengue IgM antibodies.",
    "seoKeywords": [
      "Dengue IgM iClia",
      "Dengue IgM iClia Kerala",
      "Dengue IgM iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p27",
    "name": "Dengue NS1 Ag iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Advanced iClia system for rapid Dengue NS1 antigen screening.",
    "image": "/assets/images/products/dengue-ns1-iclia.webp",
    "specs": [
      "NS1 Antigen Target",
      "High Precision",
      "Laboratory Certified"
    ],
    "slug": "dengue-ns1-ag-iclia",
    "seoDescription": "Dengue NS1 Ag iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Advanced iClia system for rapid Dengue NS1 antigen screening.",
    "seoKeywords": [
      "Dengue NS1 Ag iClia",
      "Dengue NS1 Ag iClia Kerala",
      "Dengue NS1 Ag iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p28",
    "name": "Vitamin B12 iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "Chemiluminescence Immunoassay for quantitative determination of Vitamin B12 levels.",
    "image": "/assets/images/products/vitamin-b12-iclia.webp",
    "specs": [
      "Wide Measurement Range",
      "Stable Reagents",
      "Validated Accuracy"
    ],
    "slug": "vitamin-b12-iclia",
    "seoDescription": "Vitamin B12 iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Chemiluminescence Immunoassay for quantitative determination of Vitamin B12 levels.",
    "seoKeywords": [
      "Vitamin B12 iClia",
      "Vitamin B12 iClia Kerala",
      "Vitamin B12 iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p29",
    "name": "Ferritin iClia",
    "category": "IVD Products",
    "subCategory": "Test Kits",
    "description": "High-throughput iClia assay for measuring serum Ferritin levels.",
    "image": "/assets/images/products/ferritin-iclia.webp",
    "specs": [
      "Iron Deficiency Marker",
      "Rapid Results",
      "Fully Integrated"
    ],
    "slug": "ferritin-iclia",
    "seoDescription": "Ferritin iClia available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-throughput iClia assay for measuring serum Ferritin levels.",
    "seoKeywords": [
      "Ferritin iClia",
      "Ferritin iClia Kerala",
      "Ferritin iClia Ernakulam",
      "IVD Products suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Test Kits"
    ]
  },
  {
    "id": "p30",
    "name": "Dialysis Machines",
    "category": "Nephro Care",
    "subCategory": "Equipment Range",
    "description": "Advanced hemodialysis machine designed for efficient and safe renal replacement therapy.",
    "image": "/assets/images/products/dialysis-machine.png",
    "specs": [
      "High Efficiency",
      "User Friendly",
      "Safety Monitors"
    ],
    "slug": "dialysis-machines",
    "seoDescription": "Dialysis Machines available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Advanced hemodialysis machine designed for efficient and safe renal replacement therapy.",
    "seoKeywords": [
      "Dialysis Machines",
      "Dialysis Machines Kerala",
      "Dialysis Machines Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Equipment Range"
    ]
  },
  {
    "id": "p31",
    "name": "RO Plant",
    "category": "Nephro Care",
    "subCategory": "Equipment Range",
    "description": "Reverse Osmosis water treatment plant ensuring high-purity water for dialysis applications.",
    "image": "/assets/images/products/ro-plant.jpg",
    "specs": [
      "Double Pass",
      "High Recovery",
      "Automated Disinfection"
    ],
    "slug": "ro-plant",
    "seoDescription": "RO Plant available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Reverse Osmosis water treatment plant ensuring high-purity water for dialysis applications.",
    "seoKeywords": [
      "RO Plant",
      "RO Plant Kerala",
      "RO Plant Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Equipment Range"
    ]
  },
  {
    "id": "p32",
    "name": "3 Way Extention",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "High-quality 3-way extension line with lipid resistance and secure luer lock connections for precise fluid management.",
    "image": "/assets/images/products/3way-extention.png",
    "specs": [
      "Lipid Resistant",
      "Secure Luer Lock",
      "Kink Resistant"
    ],
    "slug": "3-way-extention",
    "seoDescription": "3 Way Extention available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-quality 3-way extension line with lipid resistance and secure luer lock connections for precise fluid management.",
    "seoKeywords": [
      "3 Way Extention",
      "3 Way Extention Kerala",
      "3 Way Extention Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p33",
    "name": "IV Set",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "Specialized IV administration set designed for reliable and precise intravenous fluid therapy.",
    "image": "/assets/images/products/iv-set.jpg",
    "specs": [
      "Standard Vented",
      "Sharp Spike",
      "Flexible Drip Chamber"
    ],
    "slug": "iv-set",
    "seoDescription": "IV Set available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Specialized IV administration set designed for reliable and precise intravenous fluid therapy.",
    "seoKeywords": [
      "IV Set",
      "IV Set Kerala",
      "IV Set Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p34",
    "name": "IV Cannula Range",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "A comprehensive range of premium IV cannulas color-coded for quick identification and safety.",
    "image": "/assets/images/products/iv-cannula.png",
    "specs": [
      "Color Coded",
      "Safety Winged",
      "Standard Gauges"
    ],
    "slug": "iv-cannula-range",
    "seoDescription": "IV Cannula Range available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. A comprehensive range of premium IV cannulas color-coded for quick identification and safety.",
    "seoKeywords": [
      "IV Cannula Range",
      "IV Cannula Range Kerala",
      "IV Cannula Range Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p35",
    "name": "Medical Syringes",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "Precision-engineered medical syringes for accurate drug delivery and various clinical applications.",
    "image": "/assets/images/products/syringes-general.webp",
    "specs": [
      "High Clarity",
      "Smooth Plunger",
      "Latex Free"
    ],
    "slug": "medical-syringes",
    "seoDescription": "Medical Syringes available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Precision-engineered medical syringes for accurate drug delivery and various clinical applications.",
    "seoKeywords": [
      "Medical Syringes",
      "Medical Syringes Kerala",
      "Medical Syringes Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  },
  {
    "id": "p36",
    "name": "Acid Bicarb Conc",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "High-purity acid bicarbonate concentrate for hemodialysis, ensuring optimal electrolyte balance.",
    "image": "/assets/images/products/acid-bicarb-conc.png",
    "specs": [
      "Pharmaceutical Grade",
      "Standard Formulation",
      "Consistent Quality"
    ],
    "slug": "acid-bicarb-conc",
    "seoDescription": "Acid Bicarb Conc available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-purity acid bicarbonate concentrate for hemodialysis, ensuring optimal electrolyte balance.",
    "seoKeywords": [
      "Acid Bicarb Conc",
      "Acid Bicarb Conc Kerala",
      "Acid Bicarb Conc Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p37",
    "name": "Transducer Protector",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Pressure monitoring line protector with hydrophobic membrane to prevent cross-contamination.",
    "image": "/assets/images/products/transducer-protector.jpg",
    "specs": [
      "Hydrophobic Membrane",
      "Standard Luer Lock",
      "Bacteria Barrier"
    ],
    "slug": "transducer-protector",
    "seoDescription": "Transducer Protector available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Pressure monitoring line protector with hydrophobic membrane to prevent cross-contamination.",
    "seoKeywords": [
      "Transducer Protector",
      "Transducer Protector Kerala",
      "Transducer Protector Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p38",
    "name": "AV Fistula Needle",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Ultra-thin wall needles for optimal blood flow during hemodialysis sessions.",
    "image": "/assets/images/products/av-fistula-needle.png",
    "specs": [
      "Siliconized Tip",
      "Color Coded Wings",
      "Back-eye Design"
    ],
    "slug": "av-fistula-needle",
    "seoDescription": "AV Fistula Needle available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Ultra-thin wall needles for optimal blood flow during hemodialysis sessions.",
    "seoKeywords": [
      "AV Fistula Needle",
      "AV Fistula Needle Kerala",
      "AV Fistula Needle Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p39",
    "name": "Dialysis Machine Disinfectant",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Powerful hot/cold disinfectant solution specifically formulated for hemodialysis machines.",
    "image": "/assets/images/products/dialysis-disinfectant.jpg",
    "specs": [
      "Bactericidal",
      "Virucidal",
      "Citric Acid Based"
    ],
    "slug": "dialysis-machine-disinfectant",
    "seoDescription": "Dialysis Machine Disinfectant available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Powerful hot/cold disinfectant solution specifically formulated for hemodialysis machines.",
    "seoKeywords": [
      "Dialysis Machine Disinfectant",
      "Dialysis Machine Disinfectant Kerala",
      "Dialysis Machine Disinfectant Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p40",
    "name": "High-Flux Dialyzer",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "High-performance dialyzer with advanced membrane technology for superior toxin removal.",
    "image": "/assets/images/products/nipro-dialyzer.jpg",
    "specs": [
      "High-Flux Membrane",
      "Gamma Sterilized",
      "Low Pro-Inflammatory"
    ],
    "slug": "high-flux-dialyzer",
    "seoDescription": "High-Flux Dialyzer available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. High-performance dialyzer with advanced membrane technology for superior toxin removal.",
    "seoKeywords": [
      "High-Flux Dialyzer",
      "High-Flux Dialyzer Kerala",
      "High-Flux Dialyzer Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p41",
    "name": "Endotoxin Filter",
    "category": "Nephro Care",
    "subCategory": "Nephro Consumables",
    "description": "Advanced filtration system for producing ultrapure dialysis fluid by removing endotoxins and bacteria.",
    "image": "/assets/images/products/endotoxin-filter.jpg",
    "specs": [
      "Ultrapure Quality",
      "Long Service Life",
      "High Retention Rate"
    ],
    "slug": "endotoxin-filter",
    "seoDescription": "Endotoxin Filter available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Advanced filtration system for producing ultrapure dialysis fluid by removing endotoxins and bacteria.",
    "seoKeywords": [
      "Endotoxin Filter",
      "Endotoxin Filter Kerala",
      "Endotoxin Filter Ernakulam",
      "Nephro Care suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Nephro Consumables"
    ]
  },
  {
    "id": "p42",
    "name": "Clorosurf 1000",
    "category": "General Hospital Supplies",
    "subCategory": "Consumables",
    "description": "Medical Equipment and Surface Disinfectant. 0.100% Sodium Hypochlorite Solution for external surface disinfection.",
    "image": "/assets/images/products/clorosurf-1000.png",
    "specs": [
      "Surface Disinfectant",
      "Sodium Hypochlorite",
      "Hospital Supply"
    ],
    "slug": "clorosurf-1000",
    "seoDescription": "Clorosurf 1000 available from SmartWay Healthcare, authorized medical equipment dealer & health care product distributor in Ernakulam, Kerala, and across India. Medical Equipment and Surface Disinfectant. 0.100% Sodium Hypochlorite Solution for external surface disinfection.",
    "seoKeywords": [
      "Clorosurf 1000",
      "Clorosurf 1000 Kerala",
      "Clorosurf 1000 Ernakulam",
      "General Hospital Supplies suppliers",
      "Medical Equipment Dealers Kerala",
      "Health Care Product Distributors India",
      "Consumables"
    ]
  }
];

export const categories = [
  "All",
  "Nephro Care",
  "IVD Products",
  "General Hospital Supplies",
  "Technical Engineering"
] as const;

export const subCategoriesByCategory: Record<string, string[]> = {
  "Nephro Care": ["All", "Equipment Range", "Nephro Consumables", "Facility Systems"],
  "IVD Products": ["All", "Instrumentation", "Test Kits", "Rapid Tests"],
  "General Hospital Supplies": ["All", "Consumables", "Medical Equipment"],
  "Technical Engineering": ["All", "Medical Components", "Connectors", "Fluid Control"]
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug || p.id === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
}

export function getRelatedProducts(currentId: string, category: string, limit = 4): Product[] {
  return products
    .filter(p => p.id !== currentId && p.category === category)
    .slice(0, limit);
}
