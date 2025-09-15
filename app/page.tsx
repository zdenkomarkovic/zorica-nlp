import Hero from "@/components/Hero";
import RFGMethod from "@/components/RFGMethod";
import GriefSection from "@/components/GriefSection";
import { heroData } from "@/constants/heroData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero {...heroData} />
      <RFGMethod />
      <GriefSection />
    </div>
  );
}