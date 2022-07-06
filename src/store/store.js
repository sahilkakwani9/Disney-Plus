import create from 'zustand'

const useStore = create((set) => ({
  genre: "all",
  logged: false,
  showMarvel: () => set({genre: "marvel"}),
  showPixar: () => set({genre: "pixar"}),
  showStarWars: () => set({genre: "star-wars"}),
  showNatGeo: () => set({genre: "nat-geo"}),
  showAll: ()=> set({genre: "all"}),
  setLogged: (value) => set({logged: value})
}))

export default useStore;