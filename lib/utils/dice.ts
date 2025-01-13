export type TurnResult = {
  roll: Roll;
  attempts: number;
};

export type Roll = {
  dice: number[];
  isQualifying: boolean;
  type?: "triple" | "double" | "normal" | "instant-win" | "instant-loss";
  value: number;
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
      isQualifying: true,
      type: "triple",
      value: sortedDice[0] * 111,
    };
  }

  // Check for 4-5-6 (instant win)
  if (sortedDice[0] === 4 && sortedDice[1] === 5 && sortedDice[2] === 6) {
    return {
      dice,
      isQualifying: true,
      type: "instant-win",
      value: 999,
    };
  }

  // Check for 1-2-3 (instant loss)
  if (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3) {
    return {
      dice,
      isQualifying: true,
      type: "instant-loss",
      value: -999,
    };
  }

  // Check for doubles
  for (let i = 0; i < sortedDice.length - 1; i++) {
    if (sortedDice[i] === sortedDice[i + 1]) {
      // Find the non-double value - this is our actual score
      const nonDouble = sortedDice.find((d) => d !== sortedDice[i])!;
      return {
        dice,
        isQualifying: true,
        type: "double",
        value: nonDouble, // Now just using the remaining die value
      };
    }
  }

  // No qualifying roll
  return {
    dice,
    isQualifying: false,
    type: "normal",
    value: 0,
  };
}

export function generateVillainTurn(): TurnResult {
  let currentRoll: Roll;
  let attempts = 0;

  do {
    attempts++;
    currentRoll = evaluateRoll(rollDice());
  } while (!currentRoll.isQualifying);

  return {
    roll: currentRoll,
    attempts,
  };
}

export function compareRolls(
  playerRoll: Roll,
  computerRoll: Roll
): "player" | "computer" | "tie" {
  if (playerRoll.value == computerRoll.value) return "tie";
  return playerRoll.value > computerRoll.value ? "player" : "computer";
}
