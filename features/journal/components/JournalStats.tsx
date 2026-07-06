import { Container } from "@/components/layout/Container";

const stats = [
  {
    title: "Accuracy",
    value: "78%",
    color: "text-green-600",
  },
  {
    title: "Winning Days",
    value: "117",
    color: "text-blue-600",
  },
  {
    title: "Losing Days",
    value: "31",
    color: "text-red-500",
  },
  {
    title: "Current Streak",
    value: "12",
    color: "text-orange-500",
  },
];

export function JournalStats() {
  return (
    <section className="py-16">
      <Container>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                {stat.title}
              </p>

              <h2 className={`mt-6 text-5xl font-black ${stat.color}`}>
                {stat.value}
              </h2>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}