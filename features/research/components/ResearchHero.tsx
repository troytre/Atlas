import { Container } from "@/components/layout/Container";


export function ResearchHero() {
  return (
    <section className="border-b bg-slate-50">
      <Container>

        <div className="py-24">

          <span className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
            📊 Atlas Research
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Institutional
            <br />
            Market Intelligence
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
            Deep research covering market structure,
            macroeconomics, derivatives, sector rotation,
            institutional positioning and trader education.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <div className="rounded-full bg-white px-5 py-3 shadow">
              📚 120+ Articles
            </div>

            <div className="rounded-full bg-white px-5 py-3 shadow">
              🧠 5 Research Categories
            </div>

            <div className="rounded-full bg-white px-5 py-3 shadow">
              🔄 Updated Weekly
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

