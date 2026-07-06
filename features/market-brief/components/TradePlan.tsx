import { Container } from "@/components/layout/Container";

const features = [
  "Live Entry Levels",
  "Stop Loss & Target",
  "Risk Management",
  "Intraday Updates",
  "Instant Telegram Alerts",
];

export function TradePlan() {
  return (
    <section className="py-16">
      <Container>

        <div className="overflow-hidden rounded-3xl border bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white shadow-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Trade Execution
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Today's Exact Trade Setup
          </h2>

          <p className="mt-5 max-w-2xl text-slate-300">
            Atlas provides the market bias publicly.
            Exact entry, stop-loss, targets and live trade
            management are shared exclusively on Telegram.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur"
              >
                <span className="text-green-400">✓</span>

                <span>{feature}</span>

              </div>

            ))}

          </div>

          <div className="mt-10">

            <a
              href="https://t.me/OpenToCloseBias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-blue-500"
            >
              Join Telegram →
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}