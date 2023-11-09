import { create } from "zustand";

export type NavLinkStore = {
  active: string;
  setActive: (link: string) => void;
};

const useNavLinkStore = create<NavLinkStore>((set) => ({
  active: "aboutme",
  setActive: (link: string) => set({ active: link }),
}));

export default useNavLinkStore;
