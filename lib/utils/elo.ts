import type { MatchState } from "../stores/match";

import {
  RANDOM_VILLAIN_ELO_THRESHOLD,
  ROLL_COUNT_MULT,
  ROLL_COUNT_MULT_THRESHOLD,
} from "@/lib/constants";

export function calculateElo(
  playerRating: number,
  opponentRating: number,
  result: MatchState["result"],
  multiplier: number = 1
): { playerNewRating: number; opponentNewRating: number } {
  const expectedScore =
    1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  const actualScore = result === "win" ? 1 : result === "draw" ? 0.5 : 0;

  const baseRatingChange = Math.round(32 * (actualScore - expectedScore));
  const multipliedRatingChange = Math.round(baseRatingChange * multiplier);

  return {
    playerNewRating: playerRating + multipliedRatingChange,
    opponentNewRating: opponentRating - multipliedRatingChange,
  };
}

export function generateOpponentRating(
  playerRating: number,
  minDiff: number = -RANDOM_VILLAIN_ELO_THRESHOLD,
  maxDiff: number = RANDOM_VILLAIN_ELO_THRESHOLD
): number {
  const ratingDifference =
    Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
  return Math.max(100, Math.round(playerRating + ratingDifference));
}

export function calculateMultiplier(
  rollCount: number,
  baseMultiplier: number = ROLL_COUNT_MULT,
  threshold: number = ROLL_COUNT_MULT_THRESHOLD
): number {
  if (rollCount <= threshold) return 1;

  const tier = Math.floor((rollCount - 3) / 2);
  return Math.pow(baseMultiplier, tier + 1);
}
