import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function JoinMission() {
  return (
    <section className="py-24">
      <Container>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white shadow-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Join The Mission
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight">
            Become a Better Trader.
            <br />
            One Trading Day at a Time.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Atlas is more than a website. It is a research-first ecosystem
            built to help retail traders improve their decision-making through
            transparency, education and disciplined execution.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-white/10 p-5">
              📊 Daily Market Bias
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              📚 Institutional Research
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              📖 Transparent Trading Journal
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              🚀 Live Trade Execution on Telegram
            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/research"
              className="rounded-xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Explore Research
            </Link>

            <a
              href="https://t.me/OpenToCloseBias"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
            >
              Join Telegram →
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}