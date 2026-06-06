import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import { Industries } from "@/components/sections/Industries";
import { Benefits } from "@/components/sections/Benefits";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Events } from "@/components/sections/Events";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <CoreSolutions />
      <Industries />
      <Benefits />
      <SuccessStories />
      <Events />
      <PartnerEcosystem />
      <FinalCTA />
    </>
  );
}
