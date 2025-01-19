"use client";

import NumberFlow from "@number-flow/react";

import { ROLL_COUNT_MULT_THRESHOLD } from "@/lib/constants";

import { useMatchStore } from "@/lib/stores/match";

import { cn } from "@/lib/utils/cn";
import { calculateMultiplier } from "@/lib/utils/elo";

export const MatchDetails = () => {
  const { heroRollCount, wins, losses, draws } = useMatchStore();

  const currentMultiplier = calculateMultiplier(heroRollCount);

  return (
    <>
      <span
        className={cn("h-8 inline-block opacity-0", {
          "opacity-100": heroRollCount > 0,
        })}
      >
        rolls: <NumberFlow value={heroRollCount} />
      </span>
      <span
        className={cn("h-8 inline-block -mt-2 opacity-0", {
          "opacity-100": heroRollCount > 0,
        })}
      >
        session: <NumberFlow value={wins} />
        &middot;
        <NumberFlow value={losses} />
        &middot;
        <NumberFlow value={draws} />
      </span>
      <span
        data-active={heroRollCount > ROLL_COUNT_MULT_THRESHOLD}
        className="opacity-0 data-[active=true]:opacity-100 fixed bottom-8 left-0 right-0 text-center"
      >
        multiplier: <NumberFlow value={currentMultiplier} />
        <span className="text-[90%] ml-px">&times;</span>
      </span>
    </>
  );
};
MatchDetails.displayName = "MatchDetails";
