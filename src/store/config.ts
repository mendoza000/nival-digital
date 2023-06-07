import { create } from "zustand";

interface State {
  openNav: boolean;
  changeOpenNav: () => void;
  servicesList: string[];
  selectService: (service: string) => void;
  deselectService: (service: string) => void;
  cleanService: () => void;
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
  selectService(service) {
    const {servicesList} = get()
    const tempServiceList = servicesList


    tempServiceList.push(service)
     set(state => ({
      ...state,
      servicesList: tempServiceList
    }))
  },
  deselectService(service) {
    const {servicesList} = get()
    const tempServiceList = servicesList.filter(s => s !== service)

    set(state => ({
      ...state,
      servicesList: tempServiceList
    }))
  },
  cleanService() {
    set(state => ({
      ...state,
      servicesList: []
    }))
  },
}))