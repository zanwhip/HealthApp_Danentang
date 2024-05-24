// FoodListItem.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { gql, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import supabase from '../config/database';
import { useDispatch } from 'react-redux';
import { addItemToFood } from '../redux/actions/Actions';

const INSERT_FOOD_LOG_MUTATION = gql`
  mutation MyMutation(
    $food_id: String!
    $kcal: Int!
    $label: String!
    $user_id: String!
  ) {
    insertFood_log(
      food_id: $food_id
      kcal: $kcal
      label: $label
      user_id: $user_id
    ) {
      created_at
      food_id
      id
      kcal
      label
      user_id
    }
  }
`;

const FoodListItem = ({ item }) => {
  const navigation = useNavigation();

  const onPlusPressed = async () => {
    const { error } = await supabase.from('Food').insert({
      nameFood: item.food.label,
      cal: item.food.nutrients.ENERC_KCAL,
    });

    if (error) {
      console.log(error);
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPlusPressed}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {item.food.label}
        </Text>
        <Text style={{ color: 'dimgray' }}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign name='pluscircleo' size={24} color='royalblue' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FoodListItem;
