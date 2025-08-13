import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { SendIcon } from "../../assets/Icon/SendIcon";
import WhatAppIcon from "../../assets/Icon/WhatAppIcon";

const SocialCircle = ({ icon }) => {
  return <View style={styles.circle}>{icon}</View>;
};

export default SocialCircle;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffff",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
