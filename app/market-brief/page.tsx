import { BriefHero } from "@/features/market-brief/components/BriefHero";
import { BiasSummary } from "@/features/market-brief/components/BiasSummary";
import { TradePlan } from "@/features/market-brief/components/TradePlan";

export default function MarketBriefPage() {
  return (
    <>
      <BriefHero />
      <BiasSummary />
      <TradePlan />
    </>
  );
}   