"use client";

import { useState, useEffect } from "react";

import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_ITERATIONS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

import { useMatchStore } from "@/app/stores/match";
import { useEloStore } from "@/app/stores/elo";

import { evaluateRoll } from "@/app/utils/dice";
import { calculateElo } from "@/app/utils/elo";

import { Die } from "./Die";

export const Dice = () => {
  const { heroRating, setHeroRating, villainRating, setVillainRating } =
    useEloStore();

  const {
    isPlaying,
    isRolling,
    heroRoll = [0, 0, 0],
    heroRollCount,
    heroScore,
    villainScore,
    setHeroScore,
    setIsPlaying,
  } = useMatchStore();

  const [num1, setNum1] = useState<number | undefined>(0);
  const [num2, setNum2] = useState<number | undefined>(0);
  const [num3, setNum3] = useState<number | undefined>(0);

  const nums = [num1, num2, num3];

  useEffect(() => {
    if (!isPlaying) return;

    setTimeout(() => setNum1(heroRoll[0]), ANIMATION_DURATION);

    setTimeout(() => {
      setNum2(heroRoll[1]);
    }, ANIMATION_DURATION + ANIMATION_DELAY);

    setTimeout(() => {
      setNum3(heroRoll[2]);

      const newRoll = evaluateRoll(heroRoll);

      setHeroScore(newRoll.value);

      // if game is over
      if (newRoll.isQualifying) {
        setIsPlaying(false);

        if (heroScore !== villainScore) {
          const heroWins = heroScore! > villainScore!;
          setHeroRating(calculateElo(heroRating, villainRating, heroWins));
          setVillainRating(calculateElo(villainRating, heroRating, !heroWins));
        }
      }
    }, ANIMATION_DURATION + ANIMATION_DELAY * 2);
  }, [heroRoll]);

  return (
    <div className="flex gap-2">
      {heroRoll.map((_, i) => (
        <div
          key={`${i}_${heroRollCount}`}
          className={cn({ "animate-bounce": isRolling })}
          style={{
            animationDelay: `${ANIMATION_DELAY * i}ms`,
            animationIterationCount: ANIMATION_ITERATIONS,
          }}
        >
          <Die
            num={nums[i]}
            className={cn("transition-all opacity-100", {
              "opacity-20": !isPlaying,
            })}
          />
        </div>
      ))}
    </div>
  );
};
