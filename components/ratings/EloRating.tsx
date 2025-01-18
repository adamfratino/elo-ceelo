"use client";

import { motion } from "motion/react";

import { APP_NAME, PAGELOAD_DELAY } from "@/lib/constants";

import { HeroRating } from "./HeroRating";
import { VillainRating } from "./VillainRating";
import { ShuffleButton } from "./ShuffleButton";

export const EloRating = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: PAGELOAD_DELAY }}
      className="flex flex-col items-center gap-4"
    >
      <h1 className="text-4xl font-bold uppercase">{APP_NAME}</h1>

      <div className="flex justify-center gap-4 w-full items-center">
        <HeroRating />
        <ShuffleButton />
        <VillainRating />
      </div>
    </motion.div>
  );
};
EloRating.displayName = "EloRating";
