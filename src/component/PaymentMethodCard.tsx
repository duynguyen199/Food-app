import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CashIcon from "../../assets/Icon/CashIcon";
import { s, vs } from "react-native-size-matters";

const PaymentMethodCard = ({isSelected= false}) => {
  return (
    <View style={{ width: s(85) }}>
      <View style={styles.card}>
        <CashIcon />
      </View>
      <Text style={styles.label}>Cash</Text>
    </View>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    marginTop: vs(4),
    textAlign: "center",
  },
});
