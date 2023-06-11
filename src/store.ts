import { create } from "zustand";

export interface DialogStates {
  isOpen: boolean;
}

export interface DialogActions {
  toggle: () => void;
}

export const useDialog = create<DialogStates & DialogActions>(set => ({
  isOpen: false,
  toggle: () => set(state => ({ isOpen: !state.isOpen }))
}));
