// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import FoodLogListItem from '../components/FoodLogListItem';

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

const APIcodeFood = ({navigation}) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Calories</Text>
        <Text> 1770 - 360 = 1692</Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Today's food</Text>
        <Button title="ADD FOOD" onPress={() => navigation.navigate('SearchFood')} />
      </View>
      <FlatList
        data={data.foodLogsForDate}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 30,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    color: 'dimgray',
  },
});

export default APIcodeFood;
