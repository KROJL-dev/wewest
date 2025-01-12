import { createContext, useContext } from 'react'

import { PlacesStore } from './places'

export class RootStore {
  placesStore: PlacesStore

  constructor() {
    this.placesStore = new PlacesStore(this)
  }
}

const store = new RootStore()

export const StoreContext = createContext<RootStore>(store)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) throw new Error('You have forgot to use StoreProvider, shame on you.')
  return store
}

export default store
