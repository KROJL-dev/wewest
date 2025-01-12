import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

import { useQuery } from 'react-query'

const MapsScreen = () => {
  const { isLoading, error, data } = useQuery('markers', () => {})

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapsScreen
