import { create } from "zustand";

import type { Session } from "../types";

interface SessionState {
  wins: Session["record"]["wins"];
  losses: Session["record"]["losses"];
  draws: Session["record"]["draws"];
  setWins: (count: number) => void;
  setDraws: (count: number) => void;
  setLosses: (count: number) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  wins: 0,
  losses: 0,
  draws: 0,
  setWins: (count) => set({ wins: count }),
  setLosses: (count) => set({ losses: count }),
  setDraws: (count) => set({ draws: count }),
}));
