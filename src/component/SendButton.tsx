import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { SendIcon } from "../../assets/Icon/SendIcon";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1077AF",
  },
});
