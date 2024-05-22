import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';   
import { COLORS } from "../constants";
import CustomSwitch from '../components/CustomSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import supabase from "../config/database";

const ExerciseListItem = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: 'gainsboro',
        padding: 20,
        margin : 8,
        gap : 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={item.name} size={45} color="black" style={{ position: 'absolute', left: 15 }} />
      <View style={{ marginLeft: 55 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.typeExercise}</Text>
        <Text style={{ color: 'dimgray' }}>{item.Time} hr</Text>
        <Text style={{ color: 'dimgray' }}>{item.CaloriesExercise} cal</Text>      
      </View>
    </View>
  );
};

const SearchExercise = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);


  useEffect(() => {
    async function fetchExerciseData() {
      let { data: Exercise, error } = await supabase
        .from('Exercise')
        .select('*');

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Exercise data:", Exercise);
        setExercises(Exercise);
      }
    }

    fetchExerciseData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginTop: 60, flexDirection: 'row' }}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={30}
              color="white"
              style={{ marginLeft: 10, justifyContent : 'center' }}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>Add Exercise</Text>
        </View>
        <View style={styles.search}>
          <View style={{ flexDirection : 'row' }}>
            <FontAwesome5 name="search" size={20} color="black" style={{ marginTop  : 13, marginRight : 5 }} />
            <TextInput style={styles.input} placeholder="Search..." />     
          </View>  
        </View>
      </View>
      <ScrollView>
        <View style={styles.container_1}>
          <View style={{ marginTop: 25, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', shadowOpacity : 0.2, marginHorizontal : 10 }}>
              <CustomSwitch
                selectionMode={1}
                roundCorner={true}
                option1={'Recents'}
                option2={'Favorites'}
                selectionColor={COLORS.primary}
              />
            </View>
            <FontAwesome name="filter" size={34} color="black" style={{ marginTop : 5, marginRight : 10 }} />
          </View>
          
          {exercises.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('AddExercise')}>
              <ExerciseListItem item={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchExercise;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.primary
  },
  header: {
    height: 170,
    width: '100%',
  },
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: "20%"
  },
  input: {
    height: 50,
    width: '85%',
    color: '#7F7F7F'
  },
  container_1: {
    backgroundColor: '#EEEEEE',
    borderRadius: 30
  },
  search: {
    height: 50,
    width: '90%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
    marginHorizontal: '5%',
    borderRadius: 250,
  }
});
