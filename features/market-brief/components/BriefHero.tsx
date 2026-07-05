import { Container } from "@/components/layout/Container";

export function BriefHero() {
  return (
    <section className="py-16 border-b">
      <Container>
        <span className="rounded-full border px-3 py-1 text-sm">
          Daily Market Brief
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          NIFTY 50 Market Brief
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Daily professional market analysis covering market bias,
          institutional flows, key levels, macro events and trading
          opportunities.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span>📅 6 July 2026</span>
          <span>🕘 Updated 08:45 AM</span>
          <span>⏱ 6 min read</span>
        </div>
      </Container>
    </section>
  );
}