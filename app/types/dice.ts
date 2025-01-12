export type FixedLengthArray<
  T,
  L extends number,
  A extends T[] = []
> = A["length"] extends L ? A : FixedLengthArray<T, L, [T, ...A]>;

export type DieRoll = number;

export type DiceRoll<T extends number> = FixedLengthArray<DieRoll, T>;
