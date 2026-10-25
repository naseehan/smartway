export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Products" | "Turnkey" | "Service";
}

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "Why is SmartWay Healthcare the preferred Medical Equipment Dealer in Kerala and Ernakulam?",
    answer: "SmartWay Healthcare has established itself as a leading medical equipment dealer in Kerala and Ernakulam by combining authentic OEM medical devices with end-to-end biomedical engineering support. We serve over 80 healthcare institutions, including Aster DM Healthcare, Rajagiri Hospital, and Apollo Adlux, delivering certified clinical infrastructure with 24/7 technical continuity."
  },
  {
    category: "Products",
    question: "What medical equipment and health care products do you distribute across India?",
    answer: "As authorized health care product distributors in India, SmartWay Healthcare supplies four core verticals: (1) Nephro Care infrastructure (hemodialysis machines, Elisio dialyzers, blood tubing lines, dialysis chairs, acid-bicarb concentrates); (2) General Hospital Supplies (IV cannulas, safety syringes, infusion pumps, hospital disinfectants); (3) IVD In-Vitro Diagnostic products (CLIA-2000 analyzers, ELISA readers/washers, rapid test kits); and (4) Technical Engineering spare parts (stainless steel QRC couplers, helical gears, transducer protectors)."
  },
  {
    category: "Turnkey",
    question: "Do you provide comprehensive turnkey solutions for dialysis unit infrastructure in Kerala?",
    answer: "Yes, SmartWay Healthcare specializes in end-to-end turnkey projects for hemodialysis units across Kerala and India. We manage the complete lifecycle—from facility floor plan design, zoning, plumbing, and double-pass RO water plant installation, to medical equipment procurement, biomedical testing, commissioning, and specialized technician training."
  },
  {
    category: "Service",
    question: "Do you provide installation, calibration, and maintenance services for medical equipment?",
    answer: "Yes, our certified clinical engineering team provides end-to-end installation, regular calibration, preventive maintenance, and rapid breakdown response. We offer customized Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) to ensure your hospital equipment maintains 100% operational uptime."
  },
  {
    category: "General",
    question: "Where is SmartWay Healthcare located, and how can we request a technical quote?",
    answer: "Our corporate headquarters is located at Shop No: 21/497, Ground Floor, Kaipadamugal, Thrikkakkara North, Ernakulam, Kerala 682021. You can request a technical proposal through our website's Contact page, email us at contact@smartwayhealthcare.com, or reach our technical support desk at +91 8921172300."
  },
  {
    category: "Products",
    question: "Are your IVD diagnostic products and test kits certified?",
    answer: "All our diagnostic instrumentation and rapid test kits—including Dengue, Chikungunya, Celiac, COVID-19, and hormone panels—are manufactured under strict ISO and CE certifications in partnership with industry leaders such as J. Mitra & Co. Pvt. Ltd. We maintain complete cold-chain logistics across India to ensure peak diagnostic accuracy."
  },
  {
    category: "Service",
    question: "How fast can medical consumables and critical spares be delivered in Ernakulam and Kerala?",
    answer: "With our centralized warehouse in Ernakulam (Kochi), we provide same-day or priority next-day dispatch for critical nephrology consumables, dialysis fluids, surgical supplies, and replacement parts across all districts of Kerala, and express freight delivery across India."
  }
];
