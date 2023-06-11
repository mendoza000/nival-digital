import { create } from "zustand";

interface State {
  openNav: boolean;
  changeOpenNav: () => void;
  servicesList: string[];
  cleanService: () => void;
  selectService: (title: string) => void
}

export const useConfigStore = create<State>((set, get) => ({
  openNav: false,
  changeOpenNav() {
    const {openNav} = get();
    set(state => ({
      ...state,
      openNav: !openNav
    }) )

  },

  servicesList: [],

  selectService(title) {
    let tempServicesList = get().servicesList

    if (!tempServicesList.includes(title)){
      tempServicesList.push(title)
      set(state => ({
        ...state,
        servicesList: tempServicesList,
      }))
      console.log(get().servicesList)
      return
    }

    tempServicesList = tempServicesList.filter(s => s !== title)
    set(state => ({
      ...state, 
      servicesList: tempServicesList,
    }))
    console.log(get().servicesList)

    return 
  },
  
  cleanService() {
    set(state => ({
      ...state,
      servicesList: []
    }))
  },
}))