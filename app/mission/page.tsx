import { MissionHero } from "@/features/mission/components/MissionHero";
import { WhyAtlas } from "@/features/mission/components/WhyAtlas";
import { CorePrinciples } from "@/features/mission/components/CorePrinciples";
import { Roadmap } from "@/features/mission/components/Roadmap";
import { JoinMission } from "@/features/mission/components/JoinMission";

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <WhyAtlas />
      <CorePrinciples />
      <Roadmap />
      <JoinMission />
    </>
  );
}