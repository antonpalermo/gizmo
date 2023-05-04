import { create } from "zustand";
import { Scratch } from "@prisma/client";

interface ScratchState {
  scratches: Scratch[];
  selectedScratch: Scratch | undefined;
  addScratch?: (scratch: Scratch) => void
}

export const useScratchStore = create<ScratchState>(set => ({
  scratches: [],
  selectedScratch: undefined,
  // addScratch: (scratch: Scratch) =>
}));
