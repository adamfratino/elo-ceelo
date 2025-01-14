import { Square, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

import { DIE_SIZE } from "@/lib/constants";

const DICE = [Square, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export type DieProps = {
  num?: number;
  random?: boolean;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const Die = ({
  num = 0,
  random = false,
  size = DIE_SIZE,
  ...props
}: DieProps) => {
  const dieNumber = random
    ? Math.floor(Math.random() * 6) + 1
    : Math.max(0, Math.min(6, num));

  const Icon = DICE[dieNumber];

  if (!Icon) {
    console.warn(`Invalid die number: ${num}`);
    return null;
  }

  return <Icon size={size} strokeWidth={3} {...props} />;
};
