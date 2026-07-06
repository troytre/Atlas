import { Container } from "@/components/layout/Container";
import { JournalCard } from "./JournalCard";

const journals = [
  {
    date: "7 Jul 2026",
    bias: "Bullish",
    confidence: 82,
    result: "Correct",
    rr: "+2.1R",
  },
  {
    date: "6 Jul 2026",
    bias: "Bearish",
    confidence: 71,
    result: "Wrong",
    rr: "-1R",
  },
  {
    date: "5 Jul 2026",
    bias: "Bullish",
    confidence: 88,
    result: "Correct",
    rr: "+3R",
  },
  {
    date: "4 Jul 2026",
    bias: "Bullish",
    confidence: 76,
    result: "Correct",
    rr: "+1.5R",
  },
  {
    date: "3 Jul 2026",
    bias: "Bearish",
    confidence: 69,
    result: "Wrong",
    rr: "-1R",
  },
  {
    date: "2 Jul 2026",
    bias: "Bullish",
    confidence: 81,
    result: "Correct",
    rr: "+2.4R",
  },
];

export function JournalGrid() {
  return (
    <section className="pb-24">
      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {journals.map((journal) => (
            <JournalCard
              key={journal.date}
              {...journal}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}