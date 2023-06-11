import { create } from "zustand";

interface InitialState {
  servicesList: string[];
  selectService: (title: string) => void;
  deselectService: (title: string) => void;
  cleanServices: () => void;
}

export const useServicesStore = create<InitialState>((set, get) => ({
  servicesList: [],
  selectService(title) {
    const tempServicesList = get().servicesList
    tempServicesList[tempServicesList.length] = title

    set(state => ({
      ...state,
      servicesList: [...tempServicesList]
    }))

    // console.log(get().servicesList)

  },
  deselectService(title) {
    const tempServicesList = get().servicesList.filter(s => s !== title)
    set(state => ({
      ...state,
      servicesList: [...tempServicesList]
    }))
    // console.log(get().servicesList)

  },
  cleanServices() {
    set(state => ({
      ...state,
      servicesList: []
    }))
  },
}))