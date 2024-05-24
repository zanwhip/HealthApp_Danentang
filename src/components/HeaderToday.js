import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderToday = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')} >
      <Image source={require('../../assets/calendar.png')} />
      </TouchableOpacity>
      
      <Text style={styles.textTitle}>Today</Text>
      <Image source={require('../../assets/dotMore.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primary,
    paddingTop : 28,
    height: 90,
    width: '100%',
  },
  textTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 55,
    height: 55,
  },
});
export default HeaderToday;
