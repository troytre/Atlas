import { Button } from "@/components/ui/button";

const bias = {
  market: "NIFTY 50",
  bias: "Bullish",
  confidence: 82,
  trend: "Higher Highs",
  support: "25,180",
  resistance: "25,430",
  expectedRange: "25,220 - 25,480",
  updated: "08:42 AM",
};

export function DailyBiasCard() {
  return (
    <section className="rounded-2xl border bg-card p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Today's Market Bias
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            {bias.market}
          </h2>
        </div>

        <div className="rounded-xl bg-green-500/10 px-4 py-2">
          <p className="text-sm font-semibold text-green-500">
            {bias.bias}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Info title="Confidence" value={`${bias.confidence}%`} />
        <Info title="Trend" value={bias.trend} />
        <Info title="Support" value={bias.support} />
        <Info title="Resistance" value={bias.resistance} />
      </div>

      <div className="mt-6 rounded-xl bg-muted/40 p-4">
        <p className="text-sm text-muted-foreground">
          Expected Range
        </p>

        <p className="mt-2 text-lg font-semibold">
          {bias.expectedRange}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Updated {bias.updated}
        </p>

        <Button>
          Read Full Analysis
        </Button>
      </div>
    </section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}