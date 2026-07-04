interface MarketCardProps {
  market: string;
  bias: string;
  confidence: number;
}

export function MarketCard({
  market,
  bias,
  confidence,
}: MarketCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <h3 className="font-semibold">{market}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Market Bias
      </p>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-medium">{bias}</span>

        <span className="rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground">
          {confidence}%
        </span>
      </div>
    </div>
  );
}