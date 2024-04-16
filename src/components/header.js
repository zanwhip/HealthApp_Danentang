import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Header = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        height : 110,
        width : '100%',
        backgroundColor : COLORS.primary,
    }
})