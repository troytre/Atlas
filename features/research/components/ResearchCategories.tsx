import { Container } from "@/components/layout/Container";

const categories = [
  "Market",
  "Macro",
  "Education",
  "Crypto",
  "Commodities",
];

export function ResearchCategories() {
  return (
    <section className="py-10">
      <Container>

        <div className="flex flex-wrap gap-4">

          {categories.map((category) => (

            <button
              key={category}
              className="rounded-full border px-6 py-3 transition hover:bg-slate-900 hover:text-white"
            >
              {category}
            </button>

          ))}

        </div>

      </Container>
    </section>
  );
}