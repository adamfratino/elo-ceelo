"use client";

import NumberFlow from "@number-flow/react";
import { Shuffle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

import { PAGELOAD_DELAY } from "@/lib/constants";

import { useEloStore } from "@/lib/stores/elo";
import { useMatchStore } from "@/lib/stores/match";

import { generateOpponentRating } from "@/lib/utils/elo";

export const EloRating = () => {
  const isPlaying = useMatchStore((s) => s.isPlaying);
  const { heroRating, villainRating, setVillainRating } = useEloStore();

  function handleShuffle() {
    const newVillainRating = generateOpponentRating(heroRating);
    setVillainRating(newVillainRating);
  }

  function randomizeVillainElo() {
    const newVillainRating = generateOpponentRating(heroRating);
    setVillainRating(newVillainRating);
  }

  useEffect(() => {
    randomizeVillainElo();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: PAGELOAD_DELAY }}
      className="flex flex-col items-center gap-4"
    >
      <h1 className="text-4xl font-bold uppercase">Elo Cee-lo</h1>

      <div className="flex justify-center gap-4 w-full items-center">
        <h2 className="font-bold uppercase text-lg min-w-32 text-right">
          You: <NumberFlow value={heroRating} />
        </h2>
        <button
          type="button"
          onClick={handleShuffle}
          disabled={isPlaying}
          className="appearance-none border-2 border-foreground rounded-md p-2 animated-focus"
        >
          <Shuffle
            size={12}
            strokeWidth={3}
            className="transition-all stroke-foreground"
          />
        </button>
        <h2 className="font-bold uppercase text-lg min-w-32">
          Them: <NumberFlow value={villainRating} />
        </h2>
      </div>
    </motion.div>
  );
};

EloRating.displayName = "EloRating";
