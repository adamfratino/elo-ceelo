import { create } from "zustand";

interface EloState {
  heroRating: number;
  villainRating: number;
  setVillainRating: (rating: number) => void;
}

export const useEloStore = create<EloState>((set) => ({
  heroRating: 1500,
  villainRating: 1500,
  setVillainRating: (rating) => set(() => ({ villainRating: rating })),
}));
