import { Container } from "@/components/layout/Container";

const reasons = [
  "Strong Higher High - Higher Low market structure",
  "Price holding above VWAP",
  "Positive Global Market Sentiment",
  "OI Build-up supports bullish continuation",
  "Institutional buying remains supportive",
];

export function KeyReasons() {
  return (
    <section className="py-12">
      <Container>

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-3xl font-bold">
            Why This Bias?
          </h2>

          <p className="mt-3 text-muted-foreground">
            Key observations supporting today's market view.
          </p>

          <div className="mt-8 space-y-4">

            {reasons.map((reason) => (

              <div
                key={reason}
                className="rounded-xl border p-5"
              >
                ✅ {reason}
              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}