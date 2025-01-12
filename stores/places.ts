import { action, makeObservable } from 'mobx'

import type { RootStore } from '@/stores'

export class PlacesStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this)
  }

  @action
  async fetchPlaces(city?: string) {
    if (!city) {
      return
    }
  }
}
