"use client";

import NumberFlow from "@number-flow/react";
import { useEffect } from "react";

import { useEloStore } from "@/lib/stores/elo";

import { generateOpponentRating } from "@/lib/utils/elo";

export const VillainRating = () => {
  const { heroRating, villainRating, setVillainRating } = useEloStore();

  function randomizeVillainElo() {
    const newVillainRating = generateOpponentRating(heroRating);
    setVillainRating(newVillainRating);
  }

  useEffect(() => {
    randomizeVillainElo();
  }, []);

  return (
    <h2 className="font-bold uppercase text-lg min-w-32">
      Them: <NumberFlow value={villainRating} />
    </h2>
  );
};
VillainRating.displayName = "VillainRating";
