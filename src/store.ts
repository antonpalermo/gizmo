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

interface ModalState {
  isOpen: boolean;
}

interface ModalAction {
  toggle: () => void;
}

export const useScratchStore = create<ScratchState & ScratchAction>(set => ({
  scratch: undefined,
  scratches: [],
  addScratch: scratch =>
    set(state => ({ scratches: [...state.scratches, scratch] })),
  setScratches: (scratches: Scratch[]) => set(() => ({ scratches }))
}));

export const useModal = create<ModalState & ModalAction>(set => ({
  isOpen: false,
  toggle: () => set(state => ({ isOpen: !state.isOpen }))
}));
