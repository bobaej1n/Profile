import { create } from "zustand";

const useMenuStore = create((set) => ({
  menu: "HOME",
  setMenu(menu) {
    set(() => ({ menu: menu }));
  },
}));

export default useMenuStore;
