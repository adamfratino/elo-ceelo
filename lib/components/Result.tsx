"use client";

import { useState, useEffect } from "react";

import { useMatchStore } from "@/lib/stores/match";
import { useEloStore } from "@/lib/stores/elo";

import { compareRolls, checkInstantWin } from "@/lib/utils/dice";
import { calculateElo, calculateMultiplier } from "@/lib/utils/elo";
import { cn } from "../utils/cn";

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

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [eloDifferential, setEloDifferential] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const scoresExist = !!heroScore && !!villainScore;
    const instantWin =
      checkInstantWin(villainScore) || checkInstantWin(heroScore);

    if (scoresExist || instantWin) {
      setGameOver(true);
    }
  }, [heroScore, villainScore]);

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

      const diff = playerNewRating - heroRating;
      setEloDifferential(diff);

      setHeroRating(playerNewRating);
      setVillainRating(opponentNewRating);

      setIsPlaying(false);
    }
  }, [heroScore, gameOver]);

  return (
    <span aria-hidden={!result} className="text-center min-h-6">
      {result}

      {eloDifferential && result && (
        <span
          className={cn({
            "text-positive": eloDifferential > 0,
            "text-negative": eloDifferential < 0,
          })}
        >
          {" "}
          {eloDifferential > 0 && `+${eloDifferential}`}
          {eloDifferential < 0 && `${eloDifferential}`}
        </span>
      )}
    </span>
  );
};
