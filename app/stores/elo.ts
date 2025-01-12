import { create } from "zustand";

interface EloState {
  heroRating: number;
  villainRating?: number;
}

export const useEloStore = create<EloState>((set) => ({
  heroRating: 1500,
  villainRating: undefined,
}));
