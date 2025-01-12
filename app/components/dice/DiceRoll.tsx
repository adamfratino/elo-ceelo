"use client";

import NumberFlow from "@number-flow/react";
import { useState, useCallback, useEffect } from "react";

import { cn } from "@/lib/utils";

import { useEloStore } from "@/app/stores/elo";
import { useMatchStore } from "@/app/stores/match";

import { calculateElo, generateOpponentRating } from "@/app/utils/elo";
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

import { Die } from "./Die";

const ANIMATION_DELAY = 250;
const ANIMATION_DURATION = 3000;
const ANIMATION_ITERATIONS = 3;

export const DiceRoll = () => {
  const { heroRating, villainRating, setHeroRating, setVillainRating } =
    useEloStore();

  const { isPlaying, setIsPlaying } = useMatchStore();
  const [roll, setRoll] = useState<number[]>([0, 0, 0]);
  const [rollCount, setRollCount] = useState<number>(0);
  const [score, setScore] = useState<string>();
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleRoll = useCallback(() => {
    setRollCount((r) => r + 1);
    setIsRolling(true);

    if (!isPlaying) {
      setIsPlaying(true);
    }

    setTimeout(() => {
      setIsRolling(false);
      setRoll(rollDice(3));
    }, ANIMATION_DURATION + ANIMATION_DELAY * 2);
  }, [roll]);

  useEffect(() => {
    const isGameOver = !!checkCeeloRoll(roll);
    const sortedRoll = sortRoll(roll);

    const INSTANT_WIN = isWin(sortedRoll);
    const INSTANT_LOSS = isLoss(sortedRoll);
    const IS_TRIPLE = allSame(sortedRoll);
    const IS_DOUBLE = hasDuplicates(sortedRoll);

    const MATCH_RESULT = INSTANT_WIN || IS_TRIPLE || IS_DOUBLE;

    if (isGameOver) {
      const newHeroRating = calculateElo(
        heroRating,
        villainRating,
        MATCH_RESULT
      );
      const newVillainRating = generateOpponentRating(newHeroRating);

      setHeroRating(newHeroRating);
      setVillainRating(newVillainRating);

      if (INSTANT_WIN) {
        setScore("WIN");
      } else if (INSTANT_LOSS) {
        setScore("LOSE");
      } else if (IS_TRIPLE) {
        const score = sortedRoll[0].toString().repeat(3);
        setScore(score);
      } else if (IS_DOUBLE) {
        const score = findUniqueNumber(sortedRoll);
        setScore(score.toString());
      }
      setRollCount(0);

      setIsPlaying(false);
    } else {
      setScore("0");
    }
  }, [roll]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {roll.map((die, i) => (
          <div
            key={`${rollCount}_${i}`}
            data-animate={rollCount > 0}
            className={cn({ "animate-bounce": rollCount > 0 })}
            style={{
              animationDelay: `${ANIMATION_DELAY * i}ms`,
              animationIterationCount: ANIMATION_ITERATIONS,
            }}
          >
            <Die
              num={die}
              className={cn("transition-all", {
                "stroke-[mediumseagreen]": score === "WIN",
                "stroke-[tomato]": score === "LOSE",
                "stroke-[gold]": score !== "0",
                "stroke-cyan-500": score && Array.from(score).length === 3,
                "stroke-white": score === "000",
              })}
            />
          </div>
        ))}
      </div>
      <button
        className="mt-2 rounded-md bg-foreground text-background py-2 px-8 font-bold uppercase tracking-wide"
        disabled={isRolling}
        onClick={handleRoll}
      >
        roll dice
      </button>
      <div className="flex justify-between">
        <span
          data-loss={score === "LOSE"}
          data-win={score === "WIN"}
          className="text-xs font-bold uppercase [&>span]:data-[loss=true]:text-[tomato] [&>span]:data-[win=true]:text-[mediumseagreen]"
        >
          score:{" "}
          {isRolling ? (
            "Rolling..."
          ) : score === "000" ? (
            "0"
          ) : (
            <span>{score}</span>
          )}
        </span>

        <span className="text-xs font-bold uppercase">
          rolls: <NumberFlow value={rollCount} />
        </span>
      </div>
    </div>
  );
};

DiceRoll.displayName = "DiceRoll";
