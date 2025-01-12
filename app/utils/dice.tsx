export function rollDice(quantity: number) {
  return Array.from(
    { length: quantity },
    () => Math.floor(Math.random() * 6) + 1
  );
}

export function sortRoll(numbers: number[]) {
  return [...numbers].sort((a, b) => a - b);
}

export function findUniqueNumber(arr: number[]): number {
  return arr.reduce((acc, num) => acc ^ num, 0);
}

export function hasDuplicates(numbers: number[]) {
  return numbers.some((num, index) => numbers.indexOf(num) !== index);
}

export function allSame(numbers: number[]) {
  return numbers.every((num) => num === numbers[0]);
}

export function isWin(numbers: number[]) {
  return sortRoll(numbers).join(",") === "4,5,6";
}

export function isLoss(numbers: number[]) {
  return sortRoll(numbers).join(",") === "1,2,3";
}

export function checkCeeloRoll(roll: number[]) {
  const sortedRoll = sortRoll(roll);

  const WIN = isWin(sortedRoll);
  const LOSE = isLoss(sortedRoll);
  const IS_DOUBLE = hasDuplicates(sortedRoll);
  const IS_TRIPLE = allSame(sortedRoll);

  if (WIN || LOSE || IS_DOUBLE || IS_TRIPLE) {
    return roll;
  }

  return false;
}
