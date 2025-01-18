"use client";

import NumberFlow from "@number-flow/react";

import { useEloStore } from "@/lib/stores/elo";

export const HeroRating = () => {
  const { heroRating } = useEloStore();
  return (
    <h2 className="font-bold uppercase text-lg min-w-32 text-right">
      You: <NumberFlow value={heroRating} />
    </h2>
  );
};
HeroRating.displayName = "HeroRating";
