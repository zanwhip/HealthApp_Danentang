import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import PieChart from 'react-native-pie-chart';

const Box = ({ title, content, styleBox }) => {
  return (
    <View style={[styles.box, styleBox]}>
      <Text style={styles.title}>{title ? title : ''}</Text>
      {content ? content : <></>}
    </View>
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
