import create from 'zustand'

const useStore = create((set) => ({
  genre: "all",
  showMarvel: () => set({genre: "marvel"}),
  showPixar: () => set({genre: "pixar"}),
  showStarWars: () => set({genre: "star-wars"}),
  showNatGeo: () => set({genre: "nat-geo"}),
  showAll: ()=> set({genre: "all"})
}))

export default useStore;