import { Container } from "@/components/layout/Container";

export function BriefHero() {
  return (
    <section className="border-b bg-slate-50">
      <Container>
        <div className="py-20">

          <span className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
            📈 Daily Market Brief
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            MARKET'S 
            <br />
            BIAS Outlook
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Institutional market outlook with key levels, trade plans,
            risk analysis and macro events before the market opens.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              📅 Monday
            </span>

            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              🕘 Updated 08:45 AM
            </span>

            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              ⏱️ 6 min read
            </span>

            <span className="rounded-full bg-green-600 px-4 py-2 font-semibold text-white">
              🟢 82% Confidence
            </span>

          </div>

        </div>
      </Container>
    </section>
  );
}