"use client";

import { useState, useEffect } from "react";

import { useEloStore } from "@/lib/stores/elo";
import { useMatchStore } from "@/lib/stores/match";
import { useSessionStore } from "@/lib/stores/session";

import { cn } from "@/lib/utils/cn";
import { compareRolls, checkInstantWin } from "@/lib/utils/dice";
import { calculateElo, calculateMultiplier } from "@/lib/utils/elo";

export const Result = () => {
  const { heroRating, setHeroRating, villainRating, setVillainRating } =
    useEloStore();
  const { wins, losses, draws, setWins, setLosses, setDraws } =
    useSessionStore();
  const {
    result,
    heroScore,
    heroRollCount,
    villainScore,
    setResult,
    setIsPlaying,
  } = useMatchStore();

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [eloDifferential, setEloDifferential] = useState<number | undefined>();

  useEffect(() => {
    const scoresExist = !!heroScore && !!villainScore;
    const instantWin =
      checkInstantWin(villainScore) || checkInstantWin(heroScore);

    if (scoresExist || instantWin) {
      setGameOver(true);
    }

    console.log("Result.tsx: if heroScore or villainScore changes");
  }, [heroScore, villainScore]);

  useEffect(() => {
    if (gameOver && heroScore && villainScore) {
      const matchResult = compareRolls(heroScore, villainScore);
      const currentMultiplier = calculateMultiplier(heroRollCount);

      setResult(matchResult);

      if (matchResult === "win") setWins(wins + 1);
      if (matchResult === "lose") setLosses(losses + 1);
      if (matchResult === "draw") setDraws(draws + 1);

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
      console.log("Result.tsx: if gameOver changes");
    }
  }, [gameOver]);

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
