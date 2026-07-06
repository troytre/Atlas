import { Container } from "@/components/layout/Container";

export function MissionHero() {
  return (
    <section className="border-b bg-gradient-to-br from-slate-50 to-white py-28">
      <Container>

        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Our Mission
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight tracking-tight">
            Helping Retail Traders
            <br />
            Think Like
            <br />
            Professionals.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
            Atlas exists to remove noise, improve decision-making,
            and build a transparent research-first ecosystem where
            traders learn, analyse and execute with discipline.
          </p>

        </div>

      </Container>
    </section>
  );
}