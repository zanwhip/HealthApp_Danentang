// FoodLogListItem.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import supabase from '../config/database';

const FoodLogListItem = ({ item, onDelete }) => {
  const deleteFood = async () => {
    try {
      const { data, error } = await supabase
        .from('Food')
        .delete()
        .eq('idFood', item.idFood);

      if (error) {
        throw error;
      }
      onDelete(item.idFood);
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the food log');
    }
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Delete Food Log',
      'Are you sure you want to delete this food?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: deleteFood,
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.foodName}>{item.nameFood}</Text>
          <Text style={styles.calories}>{item.cal} cal</Text>
        </View>
        <TouchableOpacity onPress={handleDeletePress}>
          <FontAwesome name='trash' size={24} color='#FF0000' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 5,
    gap: 5,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    marginLeft: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  calories: {
    color: 'dimgray',
  },
});

export default FoodLogListItem;
