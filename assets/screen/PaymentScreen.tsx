import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../../src/component/BackButton'
import { s, vs } from 'react-native-size-matters'
import PaymentMethodCard from '../../src/component/PaymentMethodCard'

const PaymentScreen = () => {
  return (
    <View style={{flex:1,paddingTop:vs(50), paddingHorizontal:s(16)}}>
      <View style={{flexDirection:"row", alignItems:"center", marginBottom:vs(37)}}>
        <BackButton/>
        <Text style={{color:"181C2E", fontSize:s(17), marginStart:s(18)}} >Payment</Text>
      </View>
      <PaymentMethodCard/>
            <PaymentMethodCard/>

    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})