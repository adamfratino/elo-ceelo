"use client";

import { useState, useEffect } from "react";

import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_ITERATIONS,
} from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { useMatchStore } from "@/lib/stores/match";

import { Die } from "./Die";
import { evaluateRoll } from "../utils/dice";

const A1 = ANIMATION_DURATION;
const A2 = ANIMATION_DURATION + ANIMATION_DELAY;
const A3 = ANIMATION_DURATION + ANIMATION_DELAY * 2;

export const Dice = () => {
  const {
    result,
    isPlaying,
    isRolling,
    heroRoll = [0, 0, 0],
    heroRollCount,
    setIsRolling,
    setHeroScore,
  } = useMatchStore();

  const [num1, setNum1] = useState<number | undefined>(0);
  const [num2, setNum2] = useState<number | undefined>(0);
  const [num3, setNum3] = useState<number | undefined>(0);
  const nums = [num1, num2, num3];

  useEffect(() => {
    if (!isPlaying) return;
    setTimeout(() => setNum1(heroRoll[0]), A1);
    setTimeout(() => setNum2(heroRoll[1]), A2);
    setTimeout(() => {
      setNum3(heroRoll[2]);
      setIsRolling(false);

      if (heroRoll) {
        const score = evaluateRoll(heroRoll).score;
        setHeroScore(score);
      }
    }, A3);
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
              "opacity-20": !isPlaying && !result,
              "stroke-[mediumseagreen]": result === "win",
              "stroke-[tomato]": result === "lose",
              "stroke-[gold]": result === "draw",
            })}
          />
        </div>
      ))}
    </div>
  );
};
