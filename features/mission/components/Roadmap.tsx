import { Container } from "@/components/layout/Container";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Research Platform",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Trading Journal",
    status: "Completed",
  },
  {
    phase: "Phase 3",
    title: "Atlas OS",
    status: "In Progress",
  },
  {
    phase: "Phase 4",
    title: "AI Research Assistant",
    status: "Planned",
  },
  {
    phase: "Phase 5",
    title: "Community & Learning",
    status: "Planned",
  },
];

export function Roadmap() {
  return (
    <section className="py-24">
      <Container>

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Roadmap
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Building Atlas
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Atlas is being built in public. Every phase focuses on creating
            better tools, better research and a better experience for retail
            traders.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          {roadmap.map((item) => (

            <div
              key={item.phase}
              className="flex flex-col items-start justify-between rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center"
            >

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {item.phase}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

              <span
                className={`mt-6 rounded-full px-5 py-2 text-sm font-semibold md:mt-0 ${
                  item.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : item.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {item.status}
              </span>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}