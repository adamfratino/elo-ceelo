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
      score: 999,
    };
  }

  // Check for 1-2-3 (instant loss)
  if (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3) {
    return {
      dice,
      score: -999,
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
  return score === 999 || score === -999;
}
