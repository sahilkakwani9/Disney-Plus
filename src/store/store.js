import create from 'zustand'

const useStore = create((set) => ({
  genre: "all",
  logged: false,
  navOpen: false,
  showMarvel: () => set({genre: "marvel"}),
  showPixar: () => set({genre: "pixar"}),
  showStarWars: () => set({genre: "star-wars"}),
  showNatGeo: () => set({genre: "nat-geo"}),
  showAll: ()=> set({genre: "all"}),
  setLogged: (value) => set({logged: value}),
  setNavOpen: (value) => set({navOpen: value}),
}))

export default useStore;