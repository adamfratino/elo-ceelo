"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";

import { PAGELOAD_DELAY } from "@/lib/constants";
import { useMatchStore } from "@/lib/stores/match";
import { rollDice, generateVillainTurn } from "@/lib/utils/dice";

export const RollButton = () => {
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

  const buttonRef = useRef<HTMLButtonElement>(null);

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

  // focus button on pageload
  useEffect(() => focusButton(), []);
  // re-focus button after roll
  useEffect(() => {
    if (!isRolling) focusButton();
  }, [isRolling]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: PAGELOAD_DELAY }}
      className="w-full"
    >
      <button
        ref={buttonRef}
        onClick={handleRoll}
        disabled={isRolling}
        className="w-full rounded-md bg-foreground text-background py-4 px-8 uppercase tracking-wide animated-focus active:scale-95"
      >
        roll dice
      </button>
    </motion.div>
  );
};
