import { create } from "zustand";

interface ScratchState {
  scratch: [];
  selectedScratch: string | undefined;
}

export const useScratchStore = create<ScratchState>(set => ({
  scratch: [],
  selectedScratch: undefined
}));
