import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign';
const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <AntDesign name="caretleft" size={s(16)} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        height:s(32),
        width:s(32),
        borderRadius:s(16),
        backgroundColor:"#ECF0F4",
        justifyContent:"center",
        alignItems:"center",
    }
})