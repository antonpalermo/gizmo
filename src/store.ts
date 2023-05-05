import { create } from "zustand";
import { Scratch } from "@prisma/client";

interface ScratchState {
  scratch: Scratch | undefined;
  scratches: Scratch[];
}

interface ScratchAction {
  addScratch: (scratch: Scratch) => void;
  initScratch: () => Promise<void>;
}

export const useScratchStore = create<ScratchState & ScratchAction>(set => ({
  scratch: undefined,
  scratches: [],
  addScratch: scratch =>
    set(state => ({ scratches: [...state.scratches, scratch] })),
  initScratch: async () => {
    const request = await fetch("/api/scratches");
    const scratches = await request.json()
    set(() => ({ scratches }));
  }
}));
