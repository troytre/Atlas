import { Container } from "@/components/layout/Container";

export function JournalHero() {
  return (
    <section className="border-b bg-gradient-to-br from-slate-50 to-white py-24">
      <Container>

        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Atlas Journal
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight tracking-tight">
            Every Prediction.
            <br />
            Every Result.
            <br />
            Public.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
            Every trading day is documented with complete transparency.
            Winning days, losing days, market bias, confidence score,
            execution and lessons learned.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
              📈 148 Journal Entries
            </div>

            <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
              🎯 78% Accuracy
            </div>

            <div className="rounded-full border bg-white px-5 py-3 shadow-sm">
              🔥 12 Day Streak
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}