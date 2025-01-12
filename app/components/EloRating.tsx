"use client";

import { Shuffle } from "lucide-react";

import { useEloStore } from "@/app/stores/elo";

export const EloRating = () => {
  const { heroRating, villainRating } = useEloStore();

  return (
    <div className="flex justify-between items-center gap-4 mt-2">
      <h2 className="font-bold uppercase text-sm">You: {heroRating}</h2>
      <Shuffle size={16} stroke="white" />
      <h2 className="font-bold uppercase text-sm">
        Them:{" "}
        <span className="inline-block min-w-[4ch]">
          {villainRating ?? "0000"}
        </span>
      </h2>
    </div>
  );
};

EloRating.displayName = "EloRating";
