"use client";

import { useState, useCallback, useEffect } from "react";

import {
  rollDice,
  checkCeeloRoll,
  isWin,
  sortRoll,
  isLoss,
  hasDuplicates,
  allSame,
  findUniqueNumber,
} from "@/app/utils/dice";
import { cn } from "@/lib/utils";

import { Die } from "./Die";

const ANIMATION_DELAY = 250;
const ANIMATION_DURATION = 3000;
const ANIMATION_ITERATIONS = 3;

export const DiceRoll = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [roll, setRoll] = useState<number[]>([0, 0, 0]);
  const [rollCount, setRollCount] = useState<number>(0);
  const [score, setScore] = useState<string>("None");

  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleRoll = useCallback(() => {
    if (!isPlaying) setIsPlaying(true);

    setRollCount((r) => r + 1);
    setIsRolling(true);

    const newRoll = rollDice(3);

    setTimeout(() => {
      setIsRolling(false);
      setRoll(newRoll);
    }, ANIMATION_DURATION + ANIMATION_DELAY * 2);
  }, [roll]);

  useEffect(() => {
    const isGameOver = !!checkCeeloRoll(roll);
    const sortedRoll = sortRoll(roll);

    if (isGameOver) {
      if (isWin(sortedRoll)) {
        setScore("WIN");
      } else if (isLoss(sortedRoll)) {
        setScore("LOSS");
      } else if (allSame(sortedRoll)) {
        setScore(sortedRoll[0].toString());
      } else if (hasDuplicates(sortedRoll)) {
        const score = findUniqueNumber(sortedRoll);
        setScore(score.toString());
      }
      setRollCount(0);
    } else {
      setScore("None");
    }
    console.log(roll, isGameOver);
  }, [roll]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {roll.map((die, i) => (
          <div
            key={`${rollCount}_${i}`}
            data-animate={rollCount > 0}
            className={cn("opacity-0 transition-all delay-[3000]", {
              "animate-bounce": rollCount > 0,
              "opacity-100": isPlaying,
            })}
            style={{
              animationDelay: `${ANIMATION_DELAY * i}ms`,
              animationIterationCount: ANIMATION_ITERATIONS,
            }}
          >
            <Die num={die} />
          </div>
        ))}
      </div>
      <button
        className="mt-2 rounded-md bg-foreground text-background py-2 px-8 font-bold uppercase opacity-90 hover:opacity-100 transition-all tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isRolling}
        onClick={handleRoll}
      >
        roll dice
      </button>
      <div className="flex justify-between">
        <span
          className={cn(
            "text-xs font-bold text-right uppercase opacity-0 transition-all",
            { "opacity-100": isPlaying }
          )}
        >
          score: {score}
        </span>

        <span className="text-xs font-bold text-right uppercase">
          rolls: {rollCount}
        </span>
      </div>
    </div>
  );
};

DiceRoll.displayName = "DiceRoll";
