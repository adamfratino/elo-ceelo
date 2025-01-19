"use client";

import NumberFlow from "@number-flow/react";

import { useMatchStore } from "@/lib/stores/match";
import { cn } from "@/lib/utils/cn";

import { MatchDetails } from "./MatchDetails";
import { RollingText } from "./RollingText";

export const HeroDetails = () => {
  const { isRolling, heroScore } = useMatchStore();

  return (
    <div className="flex flex-col">
      <span className="flex flex-col">
        your score:{" "}
        {isRolling ? (
          <RollingText />
        ) : (
          <NumberFlow
            value={heroScore!}
            className={cn("text-4xl h-14", {
              "opacity-0": !heroScore,
            })}
          />
        )}
      </span>

      <MatchDetails />
    </div>
  );
};
