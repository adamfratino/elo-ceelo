import type { MatchState } from "../stores/match";

export function calculateElo(
  playerRating: number,
  opponentRating: number,
  result: MatchState["result"],
  kFactor: number = 32
): { playerNewRating: number; opponentNewRating: number } {
  const expectedScore =
    1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));

  // Set actualScore based on result
  const actualScore = result === "win" ? 1 : result === "draw" ? 0.5 : 0;

  const playerRatingChange = Math.round(
    kFactor * (actualScore - expectedScore)
  );

  return {
    playerNewRating: playerRating + playerRatingChange,
    opponentNewRating: opponentRating - playerRatingChange,
  };
}

export function generateOpponentRating(
  playerRating: number,
  minDiff: number = -200,
  maxDiff: number = 200
): number {
  const ratingDifference =
    Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
  return Math.max(100, Math.round(playerRating + ratingDifference));
}
