import { Container } from "@/components/layout/Container";

export function TradePlan() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-3xl font-bold">
            Trade Plan
          </h2>

          <p className="mt-3 text-muted-foreground">
            Plan first. Trade later.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="text-xl font-semibold text-green-500">
                🟢 Bullish Scenario
              </h3>

              <ul className="mt-5 space-y-3 text-sm">
                <li>• Wait for acceptance above 25,430</li>
                <li>• Look for momentum confirmation</li>
                <li>• Avoid chasing large opening candles</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <h3 className="text-xl font-semibold text-red-500">
                🔴 Bearish Scenario
              </h3>

              <ul className="mt-5 space-y-3 text-sm">
                <li>• Breakdown below 25,180</li>
                <li>• Avoid aggressive buying</li>
                <li>• Watch institutional selling</li>
              </ul>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}