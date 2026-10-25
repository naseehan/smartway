import React from "react";
import HeroSection from "@/components/home/HeroSection";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import CorePillars from "@/components/home/CorePillars";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TurnkeySection from "@/components/home/TurnkeySection";
import StatsSection from "@/components/home/StatsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Medical & Dialysis Equipment, Kerala",
  description:
    "Leading medical equipment dealers in Kerala & Ernakulam and health care product distributors across India. Offering advanced hemodialysis systems, IVD diagnostic analyzers, hospital consumables, and turnkey setups.",
  path: "",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerMarquee />
      <CorePillars />
      <FeaturedProducts />
      <TurnkeySection />
      <StatsSection />
      <FaqSection limit={5} showAllLink={true} />
      <CtaSection />
    </>
  );
}
