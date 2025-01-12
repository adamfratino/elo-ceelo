"use client";

import NumberFlow from "@number-flow/react";
import { Shuffle } from "lucide-react";

import { useEloStore } from "@/app/stores/elo";
import { generateOpponentRating } from "@/app/utils/elo";

export const EloRating = () => {
  const { heroRating, villainRating, setVillainRating } = useEloStore();

  function handleShuffle() {
    const newVillainRating = generateOpponentRating(heroRating);
    setVillainRating(newVillainRating);
  }

  return (
    <div className="flex justify-between items-center gap-4 mt-2">
      <h2 className="font-bold uppercase text-sm">
        You: <NumberFlow value={heroRating} />
      </h2>
      <button
        type="button"
        onClick={handleShuffle}
        className="appearance-none border-2 border-foreground rounded-md p-2 hover:scale-105 active:scale-95 transition-all"
      >
        <Shuffle size={12} stroke="white" className="transition-all" />
      </button>
      <h2 className="font-bold uppercase text-sm">
        Them: <NumberFlow value={villainRating} />
      </h2>
    </div>
  );
};

EloRating.displayName = "EloRating";
