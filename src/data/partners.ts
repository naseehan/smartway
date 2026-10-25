export interface Partner {
  name: string;
  logo: string;
  category?: "Hospital" | "Manufacturer" | "Institution" | "Foundation";
  location?: string;
}

export const partners: Partner[] = [
  {
    name: "Aster DM Healthcare",
    logo: "/assets/aster-logo-c97tjxo4.jpg",
    category: "Hospital",
    location: "Kochi, Kerala"
  },
  {
    name: "Rajagiri Hospital",
    logo: "/assets/rajagiri-logo-cxjhh8l8.png",
    category: "Hospital",
    location: "Aluva, Ernakulam"
  },
  {
    name: "Cosmopolitan Hospitals",
    logo: "/assets/cosmopolitan-logo-bqvoqpx5.png",
    category: "Hospital",
    location: "Thiruvananthapuram, Kerala"
  },
  {
    name: "Sunrise Hospitals",
    logo: "/assets/sunrise-logo-dwtf26vi.png",
    category: "Hospital",
    location: "Kochi, Kerala"
  },
  {
    name: "Nipro Medical India",
    logo: "/assets/nipro-dd__ji2t.png",
    category: "Manufacturer",
    location: "Global / India"
  },
  {
    name: "Cyrix Healthcare",
    logo: "/assets/cyrix-bsgw7-5y.png",
    category: "Manufacturer",
    location: "Kochi, Kerala"
  },
  {
    name: "Ananthapuri Hospital",
    logo: "/assets/ananthapuri-logo-dgonm974.jpg",
    category: "Hospital",
    location: "Thiruvananthapuram, Kerala"
  },
  {
    name: "Aster MIMS",
    logo: "/assets/aster-mims-logo-ywehfgys.png",
    category: "Hospital",
    location: "Calicut, Kerala"
  },
  {
    name: "Lions International",
    logo: "/assets/lions-logo-v2-k9q7kx94.png",
    category: "Foundation",
    location: "Worldwide / India"
  },
  {
    name: "TANKER Foundation",
    logo: "/assets/tanker-foundation-logo-v2-ehacgkcn.png",
    category: "Foundation",
    location: "Renal Care India"
  },
  {
    name: "Baby Memorial Hospital",
    logo: "/assets/bmh-logo-tsiszm7q.png",
    category: "Hospital",
    location: "Kozhikode, Kerala"
  },
  {
    name: "Apollo Adlux Hospital",
    logo: "/assets/apollo-adlux-logo-b7hqaa5n.png",
    category: "Hospital",
    location: "Angamaly, Ernakulam"
  },
  {
    name: "SAP Medicals",
    logo: "/assets/sap-medicals-logo-bjwgyff0.png",
    category: "Institution",
    location: "Kerala"
  },
  {
    name: "Meditech Corporations",
    logo: "/assets/meditech-logo-krkr6ctr.png",
    category: "Institution",
    location: "India"
  },
  {
    name: "Medical College Trivandrum",
    logo: "/assets/medical-college-trivandrum-logo-dtix12mg.jpg",
    category: "Institution",
    location: "Govt. of Kerala"
  },
  {
    name: "Thanal Daya Rehabilitation Trust",
    logo: "/assets/thanal-logo-lgu7x1bb.jpg",
    category: "Foundation",
    location: "Kerala, India"
  },
  {
    name: "J. Mitra & Co. Pvt. Ltd.",
    logo: "/assets/j-mitra-logo-cieeq1ig.png",
    category: "Manufacturer",
    location: "IVD Diagnostic Leader"
  }
];
