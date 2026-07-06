import { Container } from "@/components/layout/Container";

const filters = [
  "All",
  "Bullish",
  "Bearish",
  "Correct",
  "Wrong",
];

export function JournalFilters() {
  return (
    <section className="pb-12">
      <Container>

        <div className="flex flex-wrap gap-4">

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md
              ${
                index === 0
                  ? "bg-black text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

      </Container>
    </section>
  );
}