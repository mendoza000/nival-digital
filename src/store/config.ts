import { create } from "zustand";

interface State {
  openNav: boolean;
  changeOpenNav: () => void;
}

export const useConfigStore = create<State>((set, get) => ({
  openNav: false,
  changeOpenNav() {
    const {openNav} = get();
    set(state => ({
      ...state,
      openNav: !openNav
    }) )

    console.log(openNav)
  },
}))