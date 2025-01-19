import { create } from "zustand";

export interface MatchState {
  wins: number;
  losses: number;
  draws: number;
  isPlaying: boolean;
  isRolling: boolean;
  heroRollCount: number;
  heroRoll?: number[];
  heroScore?: number;
  villainRoll?: number[];
  villainRollCount: number;
  villainScore?: number;
  result?: "win" | "lose" | "draw";
  setWins: (count: number) => void;
  setDraws: (count: number) => void;
  setLosses: (count: number) => void;
  setIsPlaying: (is: boolean) => void;
  setIsRolling: (is: boolean) => void;
  setHeroRollCount: (count: number) => void;
  setHeroRoll: (roll: number[]) => void;
  setHeroScore: (score: number) => void;
  setVillainRoll: (roll: number[]) => void;
  setVillainRollCount: (count: number) => void;
  setVillainScore: (score: number) => void;
  setResult: (result?: "win" | "lose" | "draw") => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  wins: 0,
  losses: 0,
  draws: 0,
  isPlaying: false,
  isRolling: false,
  heroRoll: undefined,
  heroRollCount: 0,
  heroScore: undefined,
  villainRoll: undefined,
  villainRollCount: 0,
  villainScore: undefined,
  result: undefined,
  setWins: (count) => set({ wins: count }),
  setLosses: (count) => set({ losses: count }),
  setDraws: (count) => set({ draws: count }),
  setIsPlaying: (is) => set({ isPlaying: is }),
  setIsRolling: (is) => set({ isRolling: is }),
  setHeroRollCount: (count) => set({ heroRollCount: count }),
  setHeroScore: (score) => set({ heroScore: score }),
  setHeroRoll: (roll) => set({ heroRoll: roll }),
  setVillainRoll: (roll) => set({ villainRoll: roll }),
  setVillainRollCount: (count: number) => set({ villainRollCount: count }),
  setVillainScore: (score) => set({ villainScore: score }),
  setResult: (result) => set({ result }),
}));
