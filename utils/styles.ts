import type { TPlacement } from '@/types'

import { StyleSheet } from 'react-native'

function createStyle<T extends { [key: string]: any }>(styles: T): T {
  return StyleSheet.create(styles)
}

export const placesStyle = createStyle<{ [key in TPlacement]: any }>({
  ['top']: {},
  ['bottom']: {},
  ['left']: {},
  ['right']: {},
  ['verticalCenter']: { marginVertical: 'auto' },
  ['horizontalCenter']: { alignItems: 'center' },
  ['topLeft']: {},
  ['topRight']: {},
  ['bottomLeft']: {},
  ['bottomRight']: {},
})
