import { RollButton } from "./components/RollButton";
import { EloRating } from "./components/EloRating";
import { Dice } from "./components/Dice";
import { HeroDetails } from "./components/HeroDetails";
import { VillainDetails } from "./components/VillainDetails";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col items-center gap-4">
        <EloRating />
        <Dice />
        <RollButton />
        <div className="flex justify-between w-full">
          <HeroDetails />
          <VillainDetails />
        </div>
      </div>
    </main>
  );
}
