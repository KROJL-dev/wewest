import type React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  StatusBar,
} from "react-native";

import type { TPlacement } from "@/types";

import { placesStyle } from '@/utils/styles';

interface PresentationCardProps {
  title: React.ReactNode;
  source: any;
  stylesProps?: object;
  titlePlace?: TPlacement;
}

const PresentationCard = ({
  title,
  stylesProps,
  source,
  titlePlace = "verticalCenter",
}: PresentationCardProps) => (
  <View style={{ ...styles.item, ...stylesProps }}>
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={styles.imgBackground}
    />
    <Text style={{...styles.title, ...placesStyle[titlePlace]}}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    borderRadius: 10,
    height: 150,
 
    overflow: "hidden",
    flex: 1,
  },
  title: {
    alignSelf: "center",
    marginVertical:'auto',
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

export default PresentationCard;
