// FoodLogListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';

const FoodLogListItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        padding: 20,
        margin: 5,
        gap: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: 'dimgray' }}>{item.kcal} cal</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodLogListItem;
