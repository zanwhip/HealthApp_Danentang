import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import supabase from '../config/database';
import FoodLogListItem from '../components/FoodLogListItem';
import { COLORS } from '../constants';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const APIcodeFood = ({ navigation }) => {
  const user_id = 'vadim';
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = useSelector((state) => state.reducers);

  const fetchFoodLogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('Food')
        .select('*')
        .eq('idUser', userId[userId.length - 1].uid)
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setFoodData(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFoodLogs();
    }, [])
  );

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
          height: '100%',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const totalCalories = foodData.reduce((total, item) => total + item.cal, 0);

  const foodList = foodData.map((item) => item.nameFood);

  const handleDeleteFood = (idFood) => {
    setFoodData(foodData.filter((item) => item.idFood !== idFood));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name='arrowleft'
            size={30}
            color='white'
            style={{ justifyContent: 'center' }}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.Text}>Add Food</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchFood')}>
          <FontAwesome5 name='search' size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerRow}>
        <Text></Text>
        <Text style={styles.subtitle}>Calories</Text>
        <Text style={styles.calorieText}>{totalCalories}</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          style={{ marginBottom: 150 }}
          showsVerticalScrollIndicator={false}
          data={foodData}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item }) => (
            <FoodLogListItem item={item} onDelete={handleDeleteFood} />
          )}
        />
        <Text>{foodData.foodName}</Text>
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
  headerTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  calorieText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    height: '100%',
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
});

export default APIcodeFood;
