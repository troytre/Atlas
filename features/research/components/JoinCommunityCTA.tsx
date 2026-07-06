import { Container } from "@/components/layout/Container";

const features = [
  "Daily Market Bias",
  "Live Trade Execution",
  "Entry, Stop Loss & Targets",
  "Economic Events",
  "Market Updates",
];

export function JoinCommunityCTA() {
  return (
    <section className="py-20">
      <Container>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white shadow-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Atlas Community
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Ready for Today's Market?
          </h2>

          <p className="mt-6 max-w-2xl text-slate-300">
            Atlas Research builds your understanding.
            Our Telegram community delivers the real-time
            execution plan before the market opens.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {features.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 backdrop-blur"
              >
                ✅ {item}
              </div>

            ))}

          </div>

          <a
            href="https://t.me/OpenToCloseBias"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-blue-500"
          >
            Join Telegram →
          </a>

        </div>

      </Container>
    </section>
  );
}