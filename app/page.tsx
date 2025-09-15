import Hero from "@/components/Hero";
import RFGMethod from "@/components/RFGMethod";
import GriefSection from "@/components/GriefSection";
import { heroData } from "@/constants/heroData";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero {...heroData} />
      <RFGMethod />
      <GriefSection />
      <CTA />
      <Statistics />
      <Testimonials />
    </div>
  );
}