import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
const tabArr = ["Live", "Recorded"];
const ACTIVE_BG = "#75563B";
const ACTIVE_TEXT = "#FFFFFF";
const INACTIVE_TEXT = "#2C2016";
const TopTaps = () => {
  const [active, setActive] = useState("Live");
  return (
    <View style={styles.container}>
      {tabArr.map((item) => {
        return (
          <TouchableOpacity
            key={item}
            style={[
              styles.tabButton,
              active === item && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={()=>{setActive(item)}}
          >
            <Text
              style={
                active === item ? styles.active_text : styles.inActive_text
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTaps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: s(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  active_text: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "semibold",
  },
  inActive_text: {
    fontSize: s(14),
    color: INACTIVE_TEXT,
  },
});
