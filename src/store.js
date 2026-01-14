import { create } from "zustand";

export const useStore = create((set) => ({
  page: "intro",
  openProjects: () => set({ page: "projects" }),
  openAbout: () => set({ page: "about" }),
  close: () => set({ page: "intro" }),

  // 👇 ADD THESE TWO LINES
  started: false,
  setStarted: (started) => set({ started }),
}));
