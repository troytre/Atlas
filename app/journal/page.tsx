import { JournalHero } from "@/features/journal/components/JournalHero";
import { JournalStats } from "@/features/journal/components/JournalStats";
import { JournalFilters } from "@/features/journal/components/JournalFilters";
import { JournalGrid } from "@/features/journal/components/JournalGrid";
import { JournalCTA } from "@/features/journal/components/JournalCTA";

export default function JournalPage() {
  return (
    <>
      <JournalHero />
      <JournalStats />
      <JournalFilters />
      <JournalGrid />
      <JournalCTA />
    </>
  );
}