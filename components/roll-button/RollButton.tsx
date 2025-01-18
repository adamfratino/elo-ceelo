"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";

import { PAGELOAD_DELAY } from "@/lib/constants";
import { useMatchStore } from "@/lib/stores/match";
import { rollDice, generateVillainTurn } from "@/lib/utils/dice";

export const RollButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    isRolling,
    isPlaying,
    heroRollCount,
    setIsRolling,
    setIsPlaying,
    setHeroRoll,
    setHeroRollCount,
    setVillainScore,
    setVillainRollCount,
    setVillainRoll,
    setResult,
  } = useMatchStore();

  function focusButton() {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }

  function startGame() {
    setResult(undefined);
    setHeroRollCount(1);
    setIsPlaying(true);

    const newVillainRoll = generateVillainTurn();

    setVillainScore(newVillainRoll.roll.score);
    setVillainRollCount(newVillainRoll.attempts);
    setVillainRoll(newVillainRoll.roll.dice);
  }

  function handleRoll() {
    // set roll state
    if (isRolling) {
      return null;
    } else {
      setIsRolling(true);
    }

    // start game
    if (!isPlaying) {
      startGame();
    } else {
      // or increase roll count
      setHeroRollCount(heroRollCount + 1);
    }

    // roll dice for hero
    setHeroRoll(rollDice());
  }

  // re-focus button after roll
  useEffect(() => {
    if (!isRolling) focusButton();
  }, [isRolling]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: PAGELOAD_DELAY }}
      data-disabled={isRolling}
      className="w-full data-[disabled=true]:cursor-not-allowed"
    >
      <button
        ref={buttonRef}
        onClick={handleRoll}
        disabled={isRolling}
        className="w-full rounded-md bg-foreground text-background py-4 px-8 uppercase tracking-wide disabled:pointer-events-none"
      >
        roll dice
      </button>
    </motion.div>
  );
};
