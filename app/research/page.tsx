import { ResearchHero } from "@/features/research/components/ResearchHero";
import { FeaturedResearch } from "@/features/research/components/FeaturedResearch";
import { ResearchCategories } from "@/features/research/components/ResearchCategories";
import { ResearchGrid } from "@/features/research/components/ResearchGrid";
import { JoinCommunityCTA } from "@/features/research/components/JoinCommunityCTA";

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <FeaturedResearch />
      <ResearchCategories />
      <ResearchGrid />
        <JoinCommunityCTA />
    </>
  );
}