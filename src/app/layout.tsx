import type { Metadata, Viewport } from "next";
import { Inter, Schibsted_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#009065",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smartwayhealthcare.com"),
  title: {
    default: "SmartWay Healthcare | Medical Equipment Dealers, Kerala",
    template: "%s | SmartWay Healthcare",
  },
  description:
    "SmartWay Healthcare: Premier Medical Equipment Dealers in Kerala, Ernakulam and leading Health Care Product Distributors in India. Authorized supplier of Hemodialysis machines, Elisio dialyzers, IVD diagnostic analyzers, hospital supplies & turnkey renal setups since 2022.",
  authors: [{ name: "SmartWay Healthcare" }],
  creator: "SmartWay Healthcare",
  publisher: "SmartWay Healthcare",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smartwayhealthcare.com",
    siteName: "SmartWay Healthcare",
    title: "SmartWay Healthcare | Medical Equipment Dealers, Kerala",
    description:
      "Precision medical equipment, IVD diagnostics, hospital consumables, and turnkey hemodialysis setups across Kerala, Ernakulam, and India.",
    images: [
      {
        url: "/assets/images/hero-new-bg.png",
        width: 1200,
        height: 630,
        alt: "SmartWay Healthcare - Medical Equipment Dealers Kerala India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartWay Healthcare | Medical Equipment Dealers, Kerala",
    description:
      "Precision clinical engineering, turnkey hemodialysis setups, and healthcare product distribution across India.",
    images: ["/assets/images/hero-new-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${dmSerif.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/assets/images/logo-smartway.png" />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#a9ed42] selection:text-[#1d1f13]">
        <JsonLd data={generateOrganizationSchema()} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
