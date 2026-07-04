import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/features/home/components/Hero";
import { TickerStrip } from "@/features/home/components/TickerStrip";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TickerStrip />
    </>
  );
}