"use client";

import NumberFlow from "@number-flow/react";

import { useMatchStore } from "@/lib/stores/match";
import { cn } from "@/lib/utils/cn";

import { Die } from "./Die";

export const VillainDetails = () => {
  const {
    // villainRollCount,
    villainRoll = [0, 0, 0],
    villainScore,
  } = useMatchStore();

  return (
    <div className="flex flex-col items-end">
      <span className="-mb-1">their score:</span>
      <NumberFlow value={villainScore ?? 0} className="text-4xl -my-1" />
      <div className="flex">
        {villainRoll.map((num, i) => (
          <Die num={num} size={28} key={`${num}_${i}`} />
        ))}
      </div>

      {/* <span>
        their rolls: <NumberFlow value={villainRollCount} />
      </span> */}
    </div>
  );
};
