import { Container } from "@/components/layout/Container";
import { ShieldCheck, BookOpen, BarChart3, NotebookPen } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Transparent Analysis",
    description:
      "Every market view includes the reasoning behind the decision.",
  },
  {
    icon: NotebookPen,
    title: "Public Trade Journal",
    description:
      "Wins and losses are documented with lessons learned.",
  },
  {
    icon: BookOpen,
    title: "Educational Research",
    description:
      "Every report helps you understand the market, not just follow it.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description:
      "Bias is based on structured market observations, not opinions.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="text-primary font-semibold">
            Why Atlas
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Built for Serious Retail Traders
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Atlas exists to replace noise with structured market intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-primary" />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}