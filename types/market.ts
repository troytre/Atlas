export interface DailyMarketBrief {
  market: string;
  bias: "Bullish" | "Bearish" | "Neutral";
  confidence: number;
  support: string;
  resistance: string;
  expectedRange: string;
  updatedAt: string;
}