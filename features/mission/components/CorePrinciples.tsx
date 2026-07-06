import { Container } from "@/components/layout/Container";

const principles = [
  {
    title: "Transparency",
    description:
      "Every market prediction is tracked publicly. Winning and losing days are documented to build long-term trust.",
    icon: "📖",
  },
  {
    title: "Research First",
    description:
      "Every market bias is supported by data, structure and institutional analysis—not opinions or random signals.",
    icon: "📊",
  },
  {
    title: "Discipline",
    description:
      "Consistent execution and proper risk management matter more than chasing every market move.",
    icon: "🎯",
  },
  {
    title: "Continuous Learning",
    description:
      "Atlas exists to educate traders so they become independent decision-makers over time.",
    icon: "🧠",
  },
];

export function CorePrinciples() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Principles
          </p>

          <h2 className="mt-4 text-5xl font-black">
            The Values Behind Atlas
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Every feature inside Atlas is built around these core principles.
            They define how we research, publish and educate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">{principle.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {principle.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}