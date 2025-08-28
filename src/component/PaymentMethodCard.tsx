import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import CashIcon from "../../assets/Icon/CashIcon";
import { s, vs } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';

interface PaymentMethodCardProps{
  isSelected:boolean,
  title:string,
  icon:ReactNode,
  onPress: ()=>void
}
const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({isSelected= false,title,icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && <View style={styles.checkMarkCtainter}><Entypo name="check" size={s(12)} color="white"/></View>}
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
       {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
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
  selectedCardStyle:{
    backgroundColor:"white",
    borderWidth: s(2),
    borderColor:"#FF7622"
  },
  checkMarkCtainter:{
    height:s(24),
    width:s(24),
    borderRadius:s(12),
    borderWidth:s(2),
    borderColor:"#fff",
    backgroundColor:"#FF7622",
    position: "absolute",
    zIndex:1,
    top:s(-10),
    right:s(-8),
    justifyContent:"center",
    alignItems:"center"

  }
});
