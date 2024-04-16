import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import Header from '../components/header'

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      
    </View>
  )
}

export default ExploreScreen
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.background,

  },
  search : {
    height : 50,
    width : '80%',
    backgroundColor : '#FFF',
    top :  - 60,
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : '10%',
    borderRadius : 250,
    

  }
})