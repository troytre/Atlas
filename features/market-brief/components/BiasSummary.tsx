import { Container } from "@/components/layout/Container";

const summary = {
  bias: "Bullish",
  confidence: 82,
  market: "NIFTY 50",
  support: "25,180",
  resistance: "25,430",
  range: "25,220 – 25,480",
};

export function BiasSummary() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">

          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Today's Bias
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                🟢 {summary.bias}
              </h2>

              <p className="mt-4 text-muted-foreground">
                Confidence Score
              </p>

              <p className="text-2xl font-semibold">
                {summary.confidence}%
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <Metric
                title="Support"
                value={summary.support}
              />

              <Metric
                title="Resistance"
                value={summary.resistance}
              />

              <Metric
                title="Expected Range"
                value={summary.range}
              />

              <Metric
                title="Market"
                value={summary.market}
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border p-5">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}