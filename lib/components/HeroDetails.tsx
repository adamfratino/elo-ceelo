"use client";

import NumberFlow from "@number-flow/react";

import { ANIMATION_DELAY, ROLL_COUNT_MULT_THRESHOLD } from "@/lib/constants";
import { useMatchStore } from "@/lib/stores/match";
import { cn } from "@/lib/utils/cn";
import { calculateMultiplier } from "@/lib/utils/elo";

const Dot = ({ delay = 0 }: { delay?: number }) => (
  <span
    data-show={false}
    className="animate-[loading_1s_infinite]"
    style={{
      animationDelay: `${delay}ms`,
      animationTimingFunction: "step-end",
    }}
  >
    .
  </span>
);

export const HeroDetails = () => {
  const { isRolling, heroRollCount, heroScore } = useMatchStore();

  const currentMultiplier = calculateMultiplier(heroRollCount);

  return (
    <div className="flex flex-col">
      <span className="flex flex-col">
        your score:{" "}
        {isRolling ? (
          <span className="text-4xl h-14 translate-y-2">
            rolling
            <Dot />
            <Dot delay={ANIMATION_DELAY / 2} />
            <Dot delay={ANIMATION_DELAY} />
          </span>
        ) : (
          <NumberFlow
            value={heroScore!}
            className={cn("text-4xl h-14", {
              "opacity-0": !heroScore,
            })}
          />
        )}
      </span>

      <span
        className={cn("h-8 opacity-0", { "opacity-100": heroRollCount > 0 })}
      >
        rolls: <NumberFlow value={heroRollCount} />
      </span>
      <span
        data-active={heroRollCount > ROLL_COUNT_MULT_THRESHOLD}
        className="opacity-0 data-[active=true]:opacity-100 -mt-2"
      >
        multiplier: <NumberFlow value={currentMultiplier} />
        <span className="text-[90%] ml-px">&times;</span>
      </span>
    </div>
  );
};
