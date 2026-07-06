import { BriefHero } from "@/features/market-brief/components/BriefHero";
import { MarketSnapshot } from "@/features/market-brief/components/MarketSnapshot";
import { TradePlan } from "@/features/market-brief/components/TradePlan";
import { RiskFactors } from "@/features/market-brief/components/RiskFactors";
import { EconomicEvents } from "@/features/market-brief/components/EconomicEvents";
import { YesterdayResult } from "@/features/market-brief/components/YesterdayResult";
import { RelatedResearch } from "@/features/market-brief/components/RelatedResearch";

export default function MarketBriefPage() {
  return (
    <>
      <BriefHero />
      <MarketSnapshot />
      <TradePlan />
      <RiskFactors />
      <EconomicEvents />
      <YesterdayResult />
      <RelatedResearch />
    </>
  );
}


/*import { BriefHero } from "@/features/market-brief/components/BriefHero";
import { MarketSnapshot } from "@/features/market-brief/components/MarketSnapshot";import { BiasSummary } from "@/features/market-brief/components/BiasSummary";
import { TradePlan } from "@/features/market-brief/components/TradePlan";
import { RiskFactors } from "@/features/market-brief/components/RiskFactors";
import { EconomicEvents } from "@/features/market-brief/components/EconomicEvents";
import { YesterdayResult } from "@/features/market-brief/components/YesterdayResult";
import { KeyReasons } from "@/features/market-brief/components/KeyReasons";
import { RelatedResearch } from "@/features/market-brief/components/RelatedResearch";
import { KeyLevels } from "@/features/market-brief/components/KeyLevels";

export default function MarketBriefPage() {
  return (
    <>
     <BriefHero />

<MarketSnapshot />

<TradePlan />

<RiskFactors />

<EconomicEvents />

<YesterdayResult />

<RelatedResearch />
        
    </>
  );
}   

*/