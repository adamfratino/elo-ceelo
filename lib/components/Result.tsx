"use client";

import { useEffect } from "react";

import { useMatchStore } from "@/lib/stores/match";
import { useEloStore } from "@/lib/stores/elo";

import { compareRolls, checkInstantWin } from "@/lib/utils/dice";
import { calculateElo } from "@/lib/utils/elo";

export const Result = () => {
  const { heroRating, setHeroRating, villainRating, setVillainRating } =
    useEloStore();

  const { result, heroScore, villainScore, setResult, setIsPlaying } =
    useMatchStore();

  const scoresExist = !!heroScore && !!villainScore;
  const instantWin =
    checkInstantWin(villainScore) || checkInstantWin(heroScore);
  const gameOver = scoresExist || instantWin;

  useEffect(() => {
    if (gameOver && heroScore && villainScore) {
      setResult(compareRolls(heroScore, villainScore));

      setHeroRating(calculateElo(heroRating, villainRating, result === "win"));
      setVillainRating(
        calculateElo(villainRating, heroRating, result === "lose")
      );

      setIsPlaying(false);
    }
  }, [heroScore]);

  return (
    <span aria-hidden={!result} className="text-center min-h-6">
      {result}
    </span>
  );
};
