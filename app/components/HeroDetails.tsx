"use client";

import NumberFlow from "@number-flow/react";
import { useMatchStore } from "@/lib/stores/match";
import { ANIMATION_DELAY } from "@/lib/constants";

export const HeroDetails = () => {
  const { isRolling, heroRollCount, heroScore } = useMatchStore();

  return (
    <div className="flex flex-col">
      <span>
        your score:{" "}
        {isRolling ? (
          <span>
            rolling
            <span
              data-show={false}
              className="animate-[loading_1s_infinite]"
              style={{ animationTimingFunction: "step-end" }}
            >
              .
            </span>
            <span
              data-show={false}
              className="animate-[loading_1s_infinite]"
              style={{
                animationDelay: `${ANIMATION_DELAY / 2}ms`,
                animationTimingFunction: "step-end",
              }}
            >
              .
            </span>
            <span
              data-show={false}
              className="animate-[loading_1s_infinite]"
              style={{
                animationDelay: `${ANIMATION_DELAY}ms`,
                animationTimingFunction: "step-end",
              }}
            >
              .
            </span>
          </span>
        ) : (
          heroScore !== 0 && <span>{heroScore}</span>
        )}
      </span>
      <span>
        your rolls: <NumberFlow value={heroRollCount} />
      </span>
    </div>
  );
};
