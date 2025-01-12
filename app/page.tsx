import { DiceRoll } from "./components/dice/DiceRoll";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold uppercase text-center mb-2">
          Elo Cee-lo
        </h1>
        <DiceRoll />
      </div>
    </main>
  );
}
