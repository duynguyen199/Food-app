import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "../../src/component/SendButton";
import SocialCircle from "../../src/component/SocialCircle";
import { s, vs } from "react-native-size-matters";
const SocialSection = ({title,icon}) => {
  return (
    <View style={styles.container}>
      <SocialCircle icon ={icon}/>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
    paddingBottom: vs(15),
    paddingTop: vs(15),
  },
  text: {
    marginStart: s(10),
    color: "#8083A3",
    fontSize: s(12),
    flex: 1,
  },
});
