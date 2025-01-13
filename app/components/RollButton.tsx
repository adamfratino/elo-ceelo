"use client";

import { useRef, useEffect } from "react";

import { useMatchStore } from "@/lib/stores/match";
import { ANIMATION_DELAY, ANIMATION_DURATION } from "@/lib/constants";
import { rollDice, generateVillainTurn } from "@/lib/utils/dice";

export const RollButton = () => {
  const {
    isRolling,
    setIsRolling,
    isPlaying,
    setIsPlaying,
    setHeroRoll,
    heroRollCount,
    setHeroRollCount,
    setVillainScore,
    setVillainRollCount,
  } = useMatchStore();

  const buttonRef = useRef<HTMLButtonElement>(null);

  function focusButton() {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }

  function rollForVillain() {
    const newVillainRoll = generateVillainTurn();
    setVillainScore(newVillainRoll.roll.value);
    setVillainRollCount(newVillainRoll.attempts);
  }

  function handleRoll() {
    if (isRolling) return null;

    setIsRolling(true);

    if (!isPlaying) {
      setIsPlaying(true);
      rollForVillain();
      setHeroRollCount(1);
    } else {
      setHeroRollCount(heroRollCount + 1);
    }

    setHeroRoll(rollDice());

    setTimeout(() => {
      setIsRolling(false);
    }, ANIMATION_DURATION + ANIMATION_DELAY * 2);
  }

  useEffect(() => {
    focusButton();
  }, []);

  useEffect(() => {
    if (!isRolling) {
      focusButton();
    }
  }, [isRolling]);

  return (
    <button
      ref={buttonRef}
      onClick={handleRoll}
      disabled={isRolling}
      className="w-full rounded-md bg-foreground text-background py-2 px-8 tracking-wide animated-focus"
    >
      roll dice
    </button>
  );
};
