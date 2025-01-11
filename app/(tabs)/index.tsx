import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  Pressable,
} from "react-native";
import { useNavigation, Stack, Link } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

export default function HomeScreen() {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [chosenCity, setChosenCity] = useState<string>();
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Home new",
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Link href="/city">
                  <Text>City</Text>
                </Link>
              </View>
            ),
          }}
        />
        <View style={styles.drawerContainer}>
          <Text style={styles.drawerText}>Що нового?</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  drawerText: { fontWeight: "bold", marginBottom: 15, fontSize: 30 },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
