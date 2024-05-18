// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import FoodLogListItem from '../components/FoodLogListItem';
import { COLORS } from '../constants';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const query = gql`
  query foodLogsForDate($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      food_id
      user_id
      created_at
      label
      kcal
      id
    }
  }
`;
const APIcodeFood = ({ navigation }) => {
  const user_id = 'vadim';

  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format('YYYY-MM-DD'),
      user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const totalCalories = data.foodLogsForDate.reduce(
    (total, item) => total + item.kcal,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign
            name='arrowleft'
            size={30}
            color='white'
            style={{ justifyContent: 'center' }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.Text}>Add Food</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchFood')}>
          <FontAwesome5 name='search' size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerRow}>
        <Text></Text>
        <Text style={styles.subtitle}>Calories</Text>

        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          {totalCalories}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          backgroundColor: COLORS.background,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 15,
        }}
      >
        <FlatList
          style={{ marginBottom: 150 }}
          showsVerticalScrollIndicator={false}
          data={data.foodLogsForDate}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item }) => <FoodLogListItem item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    padding: 20,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '500',
    flex: 1,
    color: 'white',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 50,
    width: '85%',
    color: '#7F7F7F',
  },
  container_1: {
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    padding: 10,
  },
  search: {
    width: '90%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 250,
  },
});

export default APIcodeFood;
