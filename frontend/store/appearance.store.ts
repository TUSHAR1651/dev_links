import axios from "axios";
import { create } from "zustand";

// interface useAppearanceStore {}

export const useAppearanceStore = create<any>()((set) => ({
  themes: null,

  fetchThemes: async () => {
    const { data } = await axios.get("http://localhost:5000/theme");

    set({ themes: data });
  },

  updateAppearance: (data: any) =>
    set((state: any) => ({
      appearance: { ...state.appearance, ...data },
    })),

  selectTheme: (id: number) =>
    set((state: any) => ({
      appearance: { ...state.appearance, ...state.themes[id] },
    })),
}));
