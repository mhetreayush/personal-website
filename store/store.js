import { create } from "zustand";

const useNavLinkStore = create((set) => ({
  active: "aboutme",
  setActive: (link) => set({ active: link }),
}));

export default useNavLinkStore;
