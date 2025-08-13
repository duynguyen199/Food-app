import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTaps from "../../src/component/TopTaps";

const HomeScreen = () => {
  return (
    <View style={{ paddingTop: vs(50), paddingHorizontal: vs(16) }}>
      <Text
        style={{
          color: "1D150F",
          fontWeight: "semibold",
          fontSize: s(20),
          marginBottom: vs(6),
        }}
      >
        Mediation
      </Text>
      <Text style={{ color: "2C2016", fontSize: s(14), marginBottom: vs(16) }}>
        Lorem Ipsum is simply dummy text
      </Text>
      <TopTaps/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
