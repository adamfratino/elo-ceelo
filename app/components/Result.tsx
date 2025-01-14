"use client";

import { useState, useEffect } from "react";

import { useMatchStore } from "@/lib/stores/match";
import { useEloStore } from "@/lib/stores/elo";

import { evaluateRoll } from "@/lib/utils/dice";
import { calculateElo } from "@/lib/utils/elo";

export const Result = () => {
  const { heroRating, setHeroRating, villainRating, setVillainRating } =
    useEloStore();
  const { result, heroRoll, heroScore, villainScore } = useMatchStore();
  const [resultText, setResultText] = useState<string | undefined>(undefined);

  function formatText() {
    if (heroRoll) {
      if (result === "win" || evaluateRoll(heroRoll).type === "instant-win") {
        return "Yay, you win!";
      } else if (
        result === "lose" ||
        evaluateRoll(heroRoll).type === "instant-loss"
      ) {
        return "Darn, you lose";
      } else if (heroScore === villainScore && heroScore !== 0) {
        return "Ya'll tie";
      }
    }
  }

  useEffect(() => {
    const formattedResult = formatText();
    setResultText(formattedResult);

    if (heroRoll && result) {
      const heroWins =
        result === "win" || evaluateRoll(heroRoll).type === "instant-win";

      setHeroRating(calculateElo(heroRating, villainRating, heroWins));
      setVillainRating(calculateElo(villainRating, heroRating, !heroWins));
    }
  }, [result]);

  return (
    <span aria-hidden={!result} className="text-center min-h-6">
      {resultText}
    </span>
  );
};
