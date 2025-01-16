"use client";

import { useEffect } from "react";

import { useMatchStore } from "@/lib/stores/match";
import { useEloStore } from "@/lib/stores/elo";

import { compareRolls, checkInstantWin } from "@/lib/utils/dice";
import { calculateElo, calculateMultiplier } from "@/lib/utils/elo";

export const Result = () => {
  const { heroRating, setHeroRating, villainRating, setVillainRating } =
    useEloStore();

  const {
    result,
    heroScore,
    heroRollCount,
    villainScore,
    setResult,
    setIsPlaying,
  } = useMatchStore();

  const scoresExist = !!heroScore && !!villainScore;
  const instantWin =
    checkInstantWin(villainScore) || checkInstantWin(heroScore);
  const gameOver = scoresExist || instantWin;

  useEffect(() => {
    if (gameOver && heroScore && villainScore) {
      const matchResult = compareRolls(heroScore, villainScore);
      const currentMultiplier = calculateMultiplier(heroRollCount);

      setResult(matchResult);

      const { playerNewRating, opponentNewRating } = calculateElo(
        heroRating,
        villainRating,
        matchResult,
        currentMultiplier
      );

      setHeroRating(playerNewRating);
      setVillainRating(opponentNewRating);
      setIsPlaying(false);
    }
  }, [heroScore]);

  return (
    <span aria-hidden={!result} className="text-center min-h-6">
      {result}
    </span>
  );
};
