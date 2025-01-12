import { create } from "zustand";

interface EloState {
  heroRating: number;
  villainRating: number;
  setHeroRating: (rating: number) => void;
  setVillainRating: (rating: number) => void;
}

export const useEloStore = create<EloState>((set) => ({
  heroRating: 1500,
  villainRating: 1500,
  setHeroRating: (rating) => set({ heroRating: rating }),
  setVillainRating: (rating) => set({ villainRating: rating }),
}));
