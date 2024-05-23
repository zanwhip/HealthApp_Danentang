import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';   
import { COLORS } from "../constants";
import CustomSwitch from '../components/CustomSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import supabase from "../config/database";


// Đặt ảnh cho exercise
const exerciseImages = {
  run: require('../assets/img/run.png'),
  swim: require('../assets/img/swim.png'),
  bicycle: require('../assets/img/bicycle.png'),
  dance: require('../assets/img/dance.png'),
  jumprope: require('../assets/img/jump.png'),
  plank: require('../assets/img/run.png'),
  // Add more mappings as needed
};


const ExerciseListItem = ({ item }) => {
  const exerciseImage = exerciseImages[item.typeExercise.toLowerCase()] || require('../assets/img/jump.png');
  return (
    <View
      style={{
        backgroundColor: 'gainsboro',
        padding: 20,
        margin: 8,
        gap: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image source={exerciseImage} style={{ width: 45, height: 45, position: 'absolute', left: 15 }} />
      <View style={{ marginLeft: 55 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.typeExercise}</Text>
        <Text style={{ color: 'dimgray' }}>{item.Time} hr</Text>
        <Text style={{ color: 'dimgray' }}>{item.CaloriesExercise} cal</Text>      
      </View>
      <TouchableOpacity style={{ width: 50, height: 30}}>
      <Image source={require('../assets/img/add.png')} style={{ width: 30, height: 30}}  />
      </TouchableOpacity>
     
    </View>
  );
};

const SearchExercise = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

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
        setFilteredExercises(Exercise);
      }
    }

    fetchExerciseData();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = exercises.filter(exercise => 
      exercise.typeExercise?.toLowerCase().includes(lowercasedQuery) ||
      exercise.name?.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredExercises(filtered);
  }, [searchQuery, exercises]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginTop: 60, flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <FontAwesome5 name="search" size={20} color="black" style={{ marginTop: 13, marginRight: 5 }} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />     
          </View>  
        </View>
      </View>
      <ScrollView>
        <View style={styles.container_1}>
          <View style={{ marginTop: 25, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', shadowOpacity: 0.2, marginHorizontal: 10 }}>
              <CustomSwitch
                selectionMode={1}
                roundCorner={true}
                option1={'Recents'}
                option2={'Favorites'}
                selectionColor={COLORS.primary}
              />
            </View>
            <FontAwesome name="filter" size={34} color="black" style={{ marginTop: 5, marginRight: 10 }} />
          </View>
          
          {filteredExercises.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('AddExercise', { exercise: item })}>
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
    borderRadius: 30,
    width : '100%',
    height : 800,
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
