import { Container } from "@/components/layout/Container";

const result = {
  prediction: "Bullish",
  actual: "Bullish",
  accuracy: "Correct",
  winRate: "82%",
};

export function YesterdayResult() {
  return (
    <section className="py-14">
      <Container>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Transparency
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Yesterday's Prediction
          </h2>

          <p className="mt-3 text-muted-foreground">
            Every market view is tracked publicly to build long-term trust.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">

          <Card title="Prediction" value={result.prediction} />

          <Card title="Actual" value={result.actual} />

          <Card title="Result" value={`✅ ${result.accuracy}`} />

          <Card title="30-Day Accuracy" value={result.winRate} />

        </div>

      </Container>
    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-3 text-3xl font-black">
        {value}
      </p>

    </div>
  );
}


/*

import { Container } from "@/components/layout/Container";

const yesterday = {
  prediction: "Bullish",
  actual: "Bullish",
  result: "Correct",
};

export function YesterdayResult() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-3xl font-bold">
            Yesterday's Prediction
          </h2>

          <p className="mt-3 text-muted-foreground">
            Every prediction is publicly tracked to maintain transparency.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border p-6">
              <p className="text-sm text-muted-foreground">
                Prediction
              </p>

              <p className="mt-2 text-2xl font-bold">
                🟢 {yesterday.prediction}
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <p className="text-sm text-muted-foreground">
                Actual Outcome
              </p>

              <p className="mt-2 text-2xl font-bold">
                📈 {yesterday.actual}
              </p>
            </div>

            <div className="rounded-xl border bg-green-500/10 p-6">
              <p className="text-sm text-muted-foreground">
                Accuracy
              </p>

              <p className="mt-2 text-2xl font-bold text-green-500">
                ✅ {yesterday.result}
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

*/