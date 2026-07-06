import { Container } from "@/components/layout/Container";

const levels = [
  {
    label: "Support",
    value: "25,180",
    color: "text-green-600",
  },
  {
    label: "Resistance",
    value: "25,430",
    color: "text-red-600",
  },
  {
    label: "VWAP",
    value: "25,310",
    color: "text-yellow-600",
  },
  {
    label: "Open",
    value: "25,250",
    color: "text-blue-600",
  },
  {
    label: "Day High",
    value: "25,405",
    color: "text-purple-600",
  },
  {
    label: "Day Low",
    value: "25,165",
    color: "text-slate-600",
  },
];

export function KeyLevels() {
  return (
    <section className="py-14">
      <Container>

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Key Levels
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Today's Important Price Zones
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {levels.map((level) => (
            <div
              key={level.label}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm text-muted-foreground">
                {level.label}
              </p>

              <p className={`mt-3 text-4xl font-black ${level.color}`}>
                {level.value}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}