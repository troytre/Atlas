import { Container } from "@/components/layout/Container";

const risks = [
  {
    icon: "🇺🇸",
    title: "US Economic Data",
    description: "Major US economic releases may trigger sharp market volatility.",
  },
  {
    icon: "💰",
    title: "FII Selling",
    description: "Watch institutional selling pressure during the first half.",
  },
  {
    icon: "📉",
    title: "High India VIX",
    description: "Higher volatility may lead to wider intraday price swings.",
  },
];

export function RiskFactors() {
  return (
    <section className="py-14">
      <Container>

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Risk Factors
          </p>

          <h2 className="mt-2 text-4xl font-black">
            What Could Change Today's View
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Monitor these events carefully before taking aggressive trades.
          </p>

        </div>

        <div className="grid gap-6">

          {risks.map((risk) => (
            <div
              key={risk.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-3xl">
                  {risk.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {risk.title}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {risk.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}















/*import { Container } from "@/components/layout/Container";

const risks = [
  {
    title: "US Economic Data",
    description:
      "Unexpected macroeconomic data could increase volatility during the session.",
  },
  {
    title: "Institutional Selling",
    description:
      "Heavy FII selling may invalidate the current bullish outlook.",
  },
  {
    title: "Gap Opening",
    description:
      "A significant gap outside the expected range requires a fresh analysis.",
  },
];

export function RiskFactors() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-3xl font-bold">
            Risk Factors
          </h2>

          <p className="mt-3 text-muted-foreground">
            Conditions that could invalidate today's market view.
          </p>

          <div className="mt-8 space-y-5">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-xl border p-6"
              >
                <h3 className="font-semibold">
                  ⚠️ {risk.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

*/