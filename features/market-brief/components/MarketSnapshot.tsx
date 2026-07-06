import Image from "next/image";
import { Container } from "@/components/layout/Container";

const snapshot = {
  bias: "Bullish",
  confidence: 82,
  support: "25,180",
  resistance: "25,430",
  range: "25,220 – 25,480",
};

const evidence = [
  "Higher High • Higher Low Structure",
  "Price Trading Above VWAP",
  "Positive Global Market Sentiment",
  "Open Interest Long Build-up",
  "Institutional Buying Continues",
];

export function MarketSnapshot() {
  return (
    <section className="py-14">
      <Container>

        <div className="overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-slate-50 shadow-xl">

          {/* Header */}

          <div className="border-b p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Market Snapshot
            </p>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-5xl font-black text-green-600">
                  🟢 {snapshot.bias.toUpperCase()}
                </h2>

                <p className="mt-3 text-lg text-muted-foreground">
                  Institutional Bias for Today's Session
                </p>

              </div>

              <div className="flex items-center gap-5">

                <Image
                  src="/logos/nifty-50--big.svg"
                  alt="NIFTY 50"
                  width={80}
                  height={80}
                />

                <div>

                  <p className="text-sm text-muted-foreground">
                    Confidence
                  </p>

                  <p className="text-4xl font-black">
                    {snapshot.confidence}%
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Levels */}

          <div className="grid gap-6 border-b p-8 md:grid-cols-3">

            <LevelCard
              title="Support"
              value={snapshot.support}
              color="text-green-600"
            />

            <LevelCard
              title="Resistance"
              value={snapshot.resistance}
              color="text-red-600"
            />

            <LevelCard
              title="Expected Range"
              value={snapshot.range}
              color="text-blue-600"
            />

          </div>

          {/* Evidence */}

          <div className="p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Market Evidence
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {evidence.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg">
                    ✓
                  </div>

                  <p className="font-medium">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

function LevelCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className={`mt-3 text-3xl font-black ${color}`}>
        {value}
      </p>

    </div>
  );
}