import { create } from "zustand";
import { WindowState } from "@/types/window";

interface WindowStore {
  windows: WindowState[];

  openWindow: (window: WindowState) => void;

  closeWindow: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({

  windows: [],

  openWindow: (window) =>
    set((state) => {

      if (state.windows.find((w) => w.id === window.id)) {
        return state;
      }

      return {
        windows: [...state.windows, window],
      };

    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

}));