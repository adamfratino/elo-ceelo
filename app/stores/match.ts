import { create } from "zustand";

interface MatchState {
  isPlaying: boolean;
  isRolling: boolean;
  heroRollCount: number;
  heroRoll?: number[];
  heroScore?: number;
  villainRoll?: number[];
  villainRollCount: number;
  villainScore?: number;
  setIsPlaying: (is: boolean) => void;
  setIsRolling: (is: boolean) => void;
  setHeroRollCount: (count: number) => void;
  setHeroRoll: (roll: number[]) => void;
  setHeroScore: (score: number) => void;
  setVillainRoll: (roll: number[]) => void;
  setVillainRollCount: (count: number) => void;
  setVillainScore: (score: number) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  isPlaying: false,
  isRolling: false,
  heroRoll: undefined,
  heroRollCount: 0,
  heroScore: undefined,
  villainRoll: undefined,
  villainRollCount: 0,
  villainScore: undefined,
  setIsPlaying: (is) => set({ isPlaying: is }),
  setIsRolling: (is) => set({ isRolling: is }),
  setHeroRollCount: (count) => set({ heroRollCount: count }),
  setHeroScore: (score) => set({ heroScore: score }),
  setHeroRoll: (roll) => set({ heroRoll: roll }),
  setVillainRoll: (roll) => set({ villainRoll: roll }),
  setVillainRollCount: (count: number) => set({ villainRollCount: count }),
  setVillainScore: (score) => set({ villainScore: score }),
}));
