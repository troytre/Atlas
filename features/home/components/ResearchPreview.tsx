import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const articles = [
  {
    title: "NIFTY Outlook for Tomorrow",
    category: "Market Outlook",
    readTime: "5 min read",
  },
  {
    title: "Gold Showing Bullish Momentum",
    category: "Commodity",
    readTime: "4 min read",
  },
  {
    title: "Bitcoin Key Levels to Watch",
    category: "Crypto",
    readTime: "6 min read",
  },
];

export function ResearchPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              Research
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Latest Market Research
            </h2>

            <p className="mt-4 max-w-xl text-muted-foreground">
              Read structured market research built from price action,
              macro events and technical analysis.
            </p>
          </div>

          <Button variant="outline">
            View All
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.title}
              className="rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <p className="text-sm text-primary">
                {article.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {article.title}
              </h3>

              <p className="mt-6 text-sm text-muted-foreground">
                {article.readTime}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}