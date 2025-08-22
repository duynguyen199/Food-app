import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../../src/component/UserAvatar";
import BackButton from "../../src/component/BackButton";
import { s, vs } from "react-native-size-matters";

import SocialSection from "../../src/component/SocialSection";
import WhatAppIcon from "../Icon/WhatAppIcon";
import TwitterIcon from "../Icon/TwitterIcon";
import InstargramIcon from "../Icon/InstargramIcon";
import SnapChatIcon from "../Icon/SnapChatIcon";
import TiktokIcon from "../Icon/TiktokIcon";

const ContactUsScreen = () => {
  const array = [
    { title: "WhatsApp", icon: <WhatAppIcon /> },
    { title: "Twitter", icon: <TwitterIcon /> },
    { title: "Instagram", icon: <InstargramIcon /> },
    { title: "Snapchat", icon: <SnapChatIcon /> },
    { title: "Tiktok", icon: <TiktokIcon /> },
  ];
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platform</Text>
        {array.map((item, index) => {
          return (
            <SocialSection title={item.title} icon={item.icon} key={index} />
          );
        })}
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(20),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    color: "black",
    fontWeight: "semibold",
  },
  screenTitle: {
    fontSize: s(30),
    color: "black",
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  },
  socialItem: {
    paddingTop: vs(9000),
  },
});
