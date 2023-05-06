import { create } from "zustand";
import { Scratch } from "@prisma/client";

interface ScratchState {
  scratch: Scratch | undefined;
  scratches: Scratch[];
}

interface ScratchAction {
  addScratch: (scratch: Scratch) => void;
  setScratches: (scratches: Scratch[]) => void;
}

export const useScratchStore = create<ScratchState & ScratchAction>(set => ({
  scratch: undefined,
  scratches: [],
  addScratch: scratch =>
    set(state => ({ scratches: [...state.scratches, scratch] })),
  setScratches: (scratches: Scratch[]) => set(() => ({ scratches }))
}));
