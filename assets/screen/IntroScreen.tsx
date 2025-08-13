import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FoodLogo from "../FoodLogo";
import SunImage from "../SunImage";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <Text>Welcome to UiMasterigbdfbng</Text>
      <SunImage style={styles.sunImage} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
