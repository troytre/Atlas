import { Container } from "@/components/layout/Container";

export function JournalCTA() {
  return (
    <section className="pb-24">
      <Container>

        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-16 text-white">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Atlas Community
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Want Tomorrow's Market Bias?
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Join our Telegram community for daily market bias,
            execution plans, important levels and institutional research
            before the market opens.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
            Join Telegram →
          </button>

        </div>

      </Container>
    </section>
  );
}