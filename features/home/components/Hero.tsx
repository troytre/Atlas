import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { MarketCard } from "./MarketCard";
import { marketData } from "./market-data";
import { DailyBiasCard } from "./DailyBiasCard";
import { HeroBackground } from "./HeroBackground";


export function Hero() {
  return (
    <section className="py-24">
        <HeroBackground />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full border px-3 py-1 text-sm">
              🚀 Retail Trading Intelligence
            </span>

            <h1 className="mt-6 text-6xl font-bold tracking-tight">
              Trading Intelligence
              <br />
              for Serious Retail Traders
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Daily Market Bias, Research,
              Transparent Journals and Professional
              Market Intelligence.
            </p>

            <div className="mt-10 flex gap-4">
              <Button size="lg">
                Today's Bias
              </Button>

              <Button
                size="lg"
                variant="outline"
              >
                Research
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {marketData.map((market) => (
              <MarketCard
                key={market.market}
                {...market}
              />
            ))}
          </div>
        </div>
        <div className="mt-24">
                        <DailyBiasCard />
                    </div>
      </Container>
    </section>
  );
}




