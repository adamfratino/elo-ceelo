import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

const DICE = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export type DieProps = {
  num: number;
  random?: boolean;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const Die = ({ num, random = false, size = 80, ...props }: DieProps) => {
  const dieNumber = random
    ? Math.floor(Math.random() * 6)
    : Math.max(1, Math.min(6, num)) - 1;

  const Icon = DICE[dieNumber];

  if (!Icon) {
    console.warn(`Invalid die number: ${num}`);
    return null;
  }

  return <Icon size={size} stroke="white" strokeWidth={3} {...props} />;
};