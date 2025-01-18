"use client";

import { Shuffle } from "lucide-react";
import { useState, useEffect } from "react";

import { useEloStore } from "@/lib/stores/elo";
import { useMatchStore } from "@/lib/stores/match";

import { INITIAL_SHUFFLES } from "@/lib/constants";

import { cn } from "@/lib/utils/cn";
import { generateOpponentRating } from "@/lib/utils/elo";

export const ShuffleButton = () => {
  const isPlaying = useMatchStore((s) => s.isPlaying);

  const { heroRating, setVillainRating } = useEloStore();

  const [remaining, setRemaining] = useState(INITIAL_SHUFFLES);

  function handleShuffle() {
    const newVillainRating = generateOpponentRating(heroRating);
    if (!isPlaying) {
      setVillainRating(newVillainRating);
      setRemaining((r) => r - 1);
    }
  }

  useEffect(() => {
    if (!isPlaying) {
      setRemaining(INITIAL_SHUFFLES);
    }
  }, [isPlaying]);

  return (
    <button
      type="button"
      onClick={handleShuffle}
      disabled={isPlaying || remaining <= 0}
      className="relative appearance-none border-2 border-foreground rounded-md p-2 animated-focus"
    >
      <Shuffle
        size={12}
        strokeWidth={3}
        className="transition-all stroke-foreground"
      />
      <ShuffleBadge remaining={remaining} />
    </button>
  );
};
ShuffleButton.displayName = "ShuffleButton";

const ShuffleBadge = ({ remaining }: { remaining: number }) => {
  return (
    <aside
      className={cn(
        "absolute top-0 right-0 text-xs text-black font-bold rounded-full bg-positive size-4 -translate-y-1/2 translate-x-1/2",
        {
          "bg-neutral": remaining === 2,
          "bg-negative": remaining === 1,
          "opacity-20 pointer-events-none": remaining === 0,
        }
      )}
    >
      {remaining}
    </aside>
  );
};
ShuffleBadge.displayName = "ShuffleBadge";
