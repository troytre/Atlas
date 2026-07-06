
import { Hero } from "@/features/home/components/Hero";
import { TickerStrip } from "@/features/home/components/TickerStrip";
import { ResearchPreview } from "@/features/home/components/ResearchPreview";
import { TrustSection } from "@/features/home/components/TrustSection";

export default function HomePage() {
  return (
    <>
      
      <Hero />
      <TickerStrip />
      <TrustSection />
      <ResearchPreview />
      
    </>
  );
}