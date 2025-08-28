import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PaymentMethodCard from "./PaymentMethodCard";
import CashIcon from "../../assets/Icon/CashIcon";
import VisaIcon from "../../assets/Icon/VisaIcon";
import PayPalIcon from "../../assets/Icon/PayPalIcon";
import MasterCardIcon from "../../assets/Icon/MasterCardIcon";
import { s } from "react-native-size-matters";

const paymentMethod = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },

  { label: "PayPal", icon: <PayPalIcon /> },
  { label: "MasterCard", icon: <MasterCardIcon /> },
];
const PaymentList = () => {
  const [selected, setSelected] = useState("");
  return (
    <View>
      <Text>
        <FlatList
          data={paymentMethod}
          keyExtractor={(item: any) => {
            item.label;
          }}
          renderItem={({ item }) => (
            <PaymentMethodCard
              onPress={() => {
                setSelected(item.label);
              }}
              title={item.label}
              icon={item.icon}
              isSelected= {selected === item.label}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: s(16), paddingHorizontal: s(16), paddingTop:s(25)}}
        />
      </Text>
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
