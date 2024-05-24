import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import PieChart from 'react-native-pie-chart';

const Box = ({ title, content, styleBox, disabled, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.box, styleBox]}
      disabled={disabled ? true : false}
      onPress={onPress}
    >
      <Text style={styles.title}>{title ? title : ''}</Text>
      {content ? content : <></>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  flex1: {
    flex: 1,
  },
});
export default Box;
