import { Container } from "@/components/layout/Container";

export function FeaturedResearch() {
  return (
    <section className="py-16">
      <Container>

        <div className="overflow-hidden rounded-3xl border bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white shadow-2xl">

          <p className="uppercase tracking-[0.3em] text-slate-400">
            Featured Research
          </p>

          <h2 className="mt-5 text-5xl font-black">
            NIFTY July Outlook
          </h2>

          <p className="mt-6 max-w-2xl text-slate-300">
            Institutional positioning, market structure,
            liquidity zones and macro factors shaping
            this month's trend.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="rounded-full bg-white/10 px-4 py-2">
              Market
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              Macro
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              8 min read
            </span>

          </div>

          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500">
            Read Research →
          </button>

        </div>

      </Container>
    </section>
  );
}