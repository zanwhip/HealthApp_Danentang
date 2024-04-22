import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderToday = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/calendar.png')} />
      <Text style={styles.textTitle}>Today</Text>
      <Image source={require('../../assets/dotMore.png')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primary,
    height: 100,
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
