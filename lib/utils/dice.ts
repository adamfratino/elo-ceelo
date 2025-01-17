import { BEST_SCORE, WORST_SCORE } from "../constants";

export type TurnResult = {
  roll: Roll;
  attempts: number;
};

export type Roll = {
  dice: number[];
  score: number;
};

export function rollDice(numDice: number = 3): number[] {
  return Array.from(
    { length: numDice },
    () => Math.floor(Math.random() * 6) + 1
  );
}

export function evaluateRoll(dice: number[]): Roll {
  // Sort dice for easier pattern matching
  const sortedDice = [...dice].sort((a, b) => a - b);

  // Check for triples
  if (sortedDice[0] === sortedDice[1] && sortedDice[1] === sortedDice[2]) {
    return {
      dice,
      score: sortedDice[0] * 111,
    };
  }

  // Check for 4-5-6 (instant win)
  if (sortedDice[0] === 4 && sortedDice[1] === 5 && sortedDice[2] === 6) {
    return {
      dice,
      score: BEST_SCORE,
    };
  }

  // Check for 1-2-3 (instant loss)
  if (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3) {
    return {
      dice,
      score: WORST_SCORE,
    };
  }

  // Check for doubles
  for (let i = 0; i < sortedDice.length - 1; i++) {
    if (sortedDice[i] === sortedDice[i + 1]) {
      // Find the non-double value - this is our actual score
      const nonDouble = sortedDice.find((d) => d !== sortedDice[i])!;
      return {
        dice,
        score: nonDouble, // Now just using the remaining die value
      };
    }
  }

  return {
    dice: [0, 0, 0],
    score: 0,
  };
}

export function generateVillainTurn(): TurnResult {
  let roll: Roll;
  let attempts = 0;

  do {
    attempts++;
    roll = evaluateRoll(rollDice());
  } while (roll.score === 0); // or some other condition

  return { roll, attempts };
}

export function compareRolls(
  heroScore: number,
  villainScore: number
): "win" | "lose" | "draw" {
  if (heroScore == villainScore) return "draw";
  return heroScore > villainScore ? "win" : "lose";
}

export function checkInstantWin(score?: number) {
  return score === BEST_SCORE || score === WORST_SCORE;
}

export function countWaysToRollScore(targetScore: number): number {
  let ways = 0;

  // Try all possible dice combinations
  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      for (let d3 = 1; d3 <= 6; d3++) {
        const roll = evaluateRoll([d1, d2, d3]);
        if (roll.score === targetScore) {
          ways++;
        }
      }
    }
  }

  return ways;
}

export function calculateWinProbability(villainScore: number): number {
  let totalWinningCombinations = 0;
  let totalValidCombinations = 0;

  // Check all possible dice combinations
  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      for (let d3 = 1; d3 <= 6; d3++) {
        const roll = evaluateRoll([d1, d2, d3]);

        // Skip invalid rolls (score of 0)
        if (roll.score === 0) continue;

        totalValidCombinations++;

        if (roll.score > villainScore) {
          totalWinningCombinations++;
        }
      }
    }
  }

  return totalValidCombinations > 0
    ? totalWinningCombinations / totalValidCombinations
    : 0;
}

// Helper function to analyze all possible scores and their frequencies
export function analyzeScoreProbabilities(): Array<{
  score: number;
  combinations: number;
  probability: number;
}> {
  const scoreFrequency = new Map<number, number>();
  let totalValidCombinations = 0;

  // Count all possible combinations
  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      for (let d3 = 1; d3 <= 6; d3++) {
        const roll = evaluateRoll([d1, d2, d3]);
        if (roll.score !== 0) {
          scoreFrequency.set(
            roll.score,
            (scoreFrequency.get(roll.score) || 0) + 1
          );
          totalValidCombinations++;
        }
      }
    }
  }

  // Convert to array and calculate probabilities
  return Array.from(scoreFrequency.entries())
    .map(([score, combinations]) => ({
      score,
      combinations,
      probability: combinations / totalValidCombinations,
    }))
    .sort((a, b) => a.score - b.score);
}
