import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Stack, Link } from 'expo-router'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import PresentationCard from '@/components/PresentationCard'

// import FAIcon from '@react-native-vector-icons/fontawesome'

//@ts-ignore
import coast from '@/assets/images/places/coast.jpg'

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(true)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          name="/modal/city"
          options={{
            presentation: 'modal',
          }}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Home new',
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Link href="/modal/city">Hide Modal</Link>
              </View>
            ),
          }}
        />

        <ScrollView style={styles.drawerContainer}>
          <Text style={styles.drawerText}>Що нового?</Text>
          <View style={styles.homeCard}>
            <PresentationCard
              title={<Text style={{ textAlign: 'center' }}>Coast</Text>}
              source={coast}
            />
            <Text style={styles.homeCardText}>Вечірнє шоу </Text>
            <View>
              <View>
                {/* <FAIcon name="clock-o" size={24} /> */}
                <Text>20:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeCard}>
            <PresentationCard
              title={<Text style={{ textAlign: 'center' }}>Coast</Text>}
              source={coast}
            />
            <Text style={styles.homeCardText}>Вечірнє шоу </Text>
            <View>
              <View>
                {/* <FAIcon name="clock-o" size={24} /> */}
                <Text>20:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeCard}>
            <PresentationCard
              title={<Text style={{ textAlign: 'center' }}>Coast</Text>}
              source={coast}
            />
            <Text style={styles.homeCardText}>Вечірнє шоу </Text>
            <View>
              <View>
                {/* <FAIcon name="clock-o" size={24} /> */}
                <Text>20:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeCard}>
            <PresentationCard
              title={<Text style={{ textAlign: 'center' }}>Coast</Text>}
              source={coast}
            />
            <Text style={styles.homeCardText}>Вечірнє шоу </Text>
            <View>
              <View>
                {/* <FAIcon name="clock-o" size={24} /> */}
                <Text>20:00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  homeCard: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
  },
  homeCardText: { color: 'white', fontSize: 20 },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  drawerText: { fontWeight: 'bold', marginBottom: 15, fontSize: 30 },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
