export function calculateElo(
  playerRating: number,
  opponentRating: number,
  playerWon: boolean,
  kFactor: number = 32
): number {
  const expectedScore =
    1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  const actualScore = playerWon ? 1 : 0;

  return Math.round(playerRating + kFactor * (actualScore - expectedScore));
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
