"use client";

import NumberFlow from "@number-flow/react";

import { useMatchStore } from "@/lib/stores/match";

export const VillainDetails = () => {
  const { villainRollCount, villainScore } = useMatchStore();

  return (
    <div className="flex flex-col text-right">
      <span>
        their score: <NumberFlow value={villainScore ?? 0} />
      </span>
      <span>
        their rolls: <NumberFlow value={villainRollCount} />
      </span>
    </div>
  );
};
