import { SidebarDrawer } from "@/components/sidebar/SidebarDrawer";
import { RollButton } from "@/components/roll-button/RollButton";
import { EloRating } from "@/components/ratings/EloRating";
import { Dice } from "@/components/dice/Dice";
import { HeroDetails } from "@/components/results/HeroDetails";
import { VillainDetails } from "@/components/results/VillainDetails";
import { Result } from "@/components/results/Result";
import { AsideDrawer } from "@/components/aside/AsideDrawer";
import { DetailsContainer } from "@/components/results/DetailsContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col items-center gap-4">
        <EloRating />
        <Result />
        <Dice />
        <RollButton />
        <DetailsContainer>
          <HeroDetails />
          <VillainDetails />
        </DetailsContainer>
      </div>
      <SidebarDrawer />
      <AsideDrawer />
    </main>
  );
}
