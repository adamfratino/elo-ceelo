import { DiceRoll } from "./components/dice/DiceRoll";
import { EloRating } from "./components/EloRating";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl font-bold uppercase">Elo Cee-lo</h1>
          <EloRating />
        </div>
        <DiceRoll />
      </div>
    </main>
  );
}
