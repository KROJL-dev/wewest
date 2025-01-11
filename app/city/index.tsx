import { Stack } from "expo-router";
import React from "react";
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import kyivJPG from "@/assets/images/cities/kyiv.jpg";
type ItemData = {
  id: string;
  title: string;
};

const getItem = (data: { key: string }[], index: number): ItemData => {
  return {
    id: Math.random().toString(12).substring(0),
    title: data[index].key,
  };
};

const getItemCount = (data: unknown[]) => data.length;

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground
      source={kyivJPG}
      resizeMode="cover"
      style={styles.imgBackground}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CityScreen = () => (
  <SafeAreaProvider>
    <Stack.Screen options={{ title: "City" }} />
    <SafeAreaView style={styles.container} edges={["top"]}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        // keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        data={[
          { key: "Київ" },
          { key: "Львів" },
          { key: "Одеса" },
          { key: "Дніпро" },
          { key: "Харків" },
          { key: "Чернігів" },
          { key: "Суми" },
          { key: "Полтава" },
          { key: "Вінниця" },
          { key: "Черкаси" },
        ]}
        getItem={getItem}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
  },
});

export default CityScreen;
