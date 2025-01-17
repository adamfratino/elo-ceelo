import { RollButton } from "@/lib/components/RollButton";
import { EloRating } from "@/lib/components/EloRating";
import { Dice } from "@/lib/components/Dice";
import { HeroDetails } from "@/lib/components/HeroDetails";
import { VillainDetails } from "@/lib/components/VillainDetails";
import { Result } from "@/lib/components/Result";
import VaulDrawer from "@/lib/components/Drawer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col items-center gap-4">
        <EloRating />
        <Result />
        <Dice />
        <RollButton />
        <div className="flex justify-between w-full">
          <HeroDetails />
          <VillainDetails />
        </div>
      </div>
      <VaulDrawer />
    </main>
  );
}
