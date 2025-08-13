import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
  return (
    <View >
      <Image source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"}}
           style={styles.avatar} />
    </View>
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:{
        height:s(32),
        width:s(32),
        borderRadius:s(16),

    }
})