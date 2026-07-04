import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main className="min-h-screen bg-background">
      <Container className="py-24">
        <div className="max-w-3xl">
          <span className="rounded-full border px-3 py-1 text-sm">
            🚀 Retail Trading Intelligence
          </span>

          <h1 className="mt-6 text-6xl font-bold tracking-tight">
            Trading Intelligence
            <br />
            for Serious Retail Traders
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            Daily Market Bias, Research, Transparent Journals,
            Trading Education and Professional Market Intelligence.
          </p>

          <div className="mt-10 flex gap-4">
            <Button size="lg">
              Today's Market Bias
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}