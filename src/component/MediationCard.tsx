import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import CameraIcon from "../../assets/Icon/CameraIcon";

const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - s(16) *3)/2;

interface MediationCardProps {
  imageUrl: string;
  title: string;
  date: string;
}
const MediationCard:FC<MediationCardProps> = ({imageUrl,title,date}) => {
  return (
    <ImageBackground
      source={{
        uri: imageUrl
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.viewBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: s(4) }}>
          <CameraIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default MediationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    position: "absolute",
    bottom: vs(10),
    left: s(10),
    right: s(10),
  },
  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "semibold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  dateText: {
    fontSize: s(12),
    color: "#fff",
    marginStart: s(4),
  },
  viewBadge: {
    backgroundColor: "#E41111",
    height: vs(22),
    width: vs(39),
    borderRadius: s(90),
    position: "absolute",
    top: vs(10),
    right: s(0),
    justifyContent: "center",
    alignItems: "center",
  },
  liveText: {
    fontSize: s(11),
    color: "#fff",
    fontWeight: "semibold",
  },
});
