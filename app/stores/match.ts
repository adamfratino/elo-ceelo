import { create } from "zustand";

interface MatchState {
  isPlaying: boolean;
  setIsPlaying: (is: boolean) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  isPlaying: false,
  setIsPlaying: (is) => set({ isPlaying: is }),
}));
