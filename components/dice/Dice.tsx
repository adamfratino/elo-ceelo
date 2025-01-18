"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_ITERATIONS,
} from "@/lib/constants";
import { useMatchStore } from "@/lib/stores/match";
import { cn } from "@/lib/utils/cn";
import { evaluateRoll } from "@/lib/utils/dice";

import { Die } from "./Die";

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

  const [pageIsLoaded, setPageIsLoaded] = useState<boolean>(false);
  const [showNum1, setShowNum1] = useState<boolean>(false);
  const [showNum2, setShowNum2] = useState<boolean>(false);
  const [showNum3, setShowNum3] = useState<boolean>(false);
  const [num1, setNum1] = useState<number | undefined>(0);
  const [num2, setNum2] = useState<number | undefined>(0);
  const [num3, setNum3] = useState<number | undefined>(0);
  const nums = [num1, num2, num3];
  const showNums = [showNum1, showNum2, showNum3];

  useEffect(() => {
    if (!isPlaying) return;

    setShowNum1(false);
    setShowNum2(false);
    setShowNum3(false);

    setTimeout(() => {
      setNum1(heroRoll[0]);
      setShowNum1(true);
    }, A1);

    setTimeout(() => {
      setNum2(heroRoll[1]);
      setShowNum2(true);
    }, A2);

    setTimeout(() => {
      setNum3(heroRoll[2]);
      setShowNum3(true);
      setIsRolling(false);

      if (heroRoll) {
        const score = evaluateRoll(heroRoll).score;
        setHeroScore(score);
      }
    }, A3);
  }, [heroRoll]);

  useEffect(() => setPageIsLoaded(true), []);

  return (
    <div className="flex gap-2">
      {heroRoll.map((_, i) => {
        return (
          <motion.div
            initial={!pageIsLoaded ? { opacity: 0, scale: 0.5 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (ANIMATION_DELAY / 2000) * i }}
            key={`${i}_${heroRollCount}`}
            className={cn({ "animate-bounce": isRolling })}
            style={{
              animationDelay: `${ANIMATION_DELAY * i}ms`,
              animationIterationCount: ANIMATION_ITERATIONS,
            }}
          >
            <Die
              num={showNums[i] ? nums[i] : 0}
              className={cn("transition-all opacity-100", {
                "opacity-80 dark:opacity-20": !isPlaying && !result,
                "stroke-positive": result === "win",
                "stroke-negative": result === "lose",
                "stroke-neutral": result === "draw",
              })}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
