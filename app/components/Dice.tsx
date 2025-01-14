"use client";

import { useState, useEffect } from "react";

import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_ITERATIONS,
} from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

import { useMatchStore } from "@/lib/stores/match";

import { evaluateRoll } from "@/lib/utils/dice";

import { Die } from "./Die";

export const Dice = () => {
  const {
    result,
    isPlaying,
    isRolling,
    heroRoll = [0, 0, 0],
    heroRollCount,
    heroScore,
    villainScore,
    setHeroScore,
    setIsPlaying,
    setResult,
  } = useMatchStore();

  const [num1, setNum1] = useState<number | undefined>(0);
  const [num2, setNum2] = useState<number | undefined>(0);
  const [num3, setNum3] = useState<number | undefined>(0);

  const nums = [num1, num2, num3];

  useEffect(() => {
    if (!isPlaying) return;

    // set first die
    setTimeout(() => setNum1(heroRoll[0]), ANIMATION_DURATION);

    // set second die
    setTimeout(() => {
      setNum2(heroRoll[1]);
    }, ANIMATION_DURATION + ANIMATION_DELAY);

    // set third die
    setTimeout(() => {
      setNum3(heroRoll[2]);

      const newRoll = evaluateRoll(heroRoll);
      setHeroScore(newRoll.value);

      // if game is over
      if (newRoll.isQualifying) {
        setIsPlaying(false);
      }
    }, ANIMATION_DURATION + ANIMATION_DELAY * 2);
  }, [heroRoll]);

  useEffect(() => {
    const gameOver = evaluateRoll(heroRoll).isQualifying;

    if (gameOver && heroScore && villainScore) {
      console.log("heroRoll", heroScore);
      console.log("villainRoll", villainScore);

      if (heroScore > villainScore) {
        setResult("win");
      } else if (heroScore < villainScore) {
        setResult("lose");
      } else {
        setResult("draw");
      }
    }
  }, [heroScore, villainScore]);

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
              "opacity-20": !isPlaying && !result,
              "stroke-[mediumseagreen]": result === "win",
              "stroke-[gold]": result === "draw",
              "stroke-[tomato]": result === "lose",
            })}
          />
        </div>
      ))}
    </div>
  );
};
