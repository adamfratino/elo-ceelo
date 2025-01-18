"use client";

import NumberFlow from "@number-flow/react";

import { useMatchStore } from "@/lib/stores/match";
import { cn } from "@/lib/utils/cn";

import { Die } from "../dice/Die";

export const VillainDetails = () => {
  const { villainRoll, villainScore, result } = useMatchStore();

  return (
    <div className="flex flex-col items-end">
      <span>their score:</span>
      <NumberFlow
        value={villainScore ?? 0}
        className={cn("text-4xl h-14", {
          "text-negative": result === "win",
          "text-positive": result === "lose",
          "text-neutral": result === "draw",
        })}
      />
      <div
        className={cn("flex opacity-100 transition-all", {
          "opacity-0": !villainScore,
        })}
      >
        {villainRoll?.map((num, i) => (
          <Die
            num={num}
            size={28}
            key={`${num}_${i}`}
            className={cn({
              "stroke-negative": result === "win",
              "stroke-positive": result === "lose",
              "stroke-neutral": result === "draw",
            })}
          />
        ))}
      </div>
    </div>
  );
};
