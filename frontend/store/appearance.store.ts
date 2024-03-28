import axios from "axios";
import { create } from "zustand";

interface useAppearanceStore {}

export const useAppearanceStore = create<any>()((set) => ({
  themes: null,
  isCustom: false,

  fetchThemes: async () => {
    const { data } = await axios.get("http://localhost:5000/theme");

    set({ themes: data });
  },
}));
