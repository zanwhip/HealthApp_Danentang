import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';   
import { COLORS } from "../constants";
import CustomSwitch from '../components/CustomSwitch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ExerciseListItem = ({item}) => {
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
        <MaterialCommunityIcons name={item.name} size={45} color="black"  style={{ position: 'absolute', left: 15 }} />
      <View style={{ marginLeft: 55 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: 'dimgray'  }}>{item.hour} hr</Text>
        <Text style={{ color: 'dimgray' }}>{item.cal} cal</Text>      
      </View>
      
    </View>
  );
};


const SearchExercise = () => {
// state for switch button 


  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <View style={{ marginTop : 60, flexDirection: 'row' }}>
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
    <TextInput style={styles.input}
          placeholder="Search..." />     
    </View>  
    </View>
    </View>
    <ScrollView>
    <View style={styles.container_1}>
    <View style={{ marginTop : 25, marginBottom : 10, flexDirection : 'row', justifyContent : 'space-between'}}>
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
  
      <ExerciseListItem  item={{name : 'run', label: 'Run',hour:30, cal:150}}/>
      <ExerciseListItem  item={{name : 'bicycle', label: 'Bicycle',hour:1, cal:150}}/>
      <ExerciseListItem  item={{name : 'walk',label: 'Walk',hour:2, cal:200}}/>
      <ExerciseListItem  item={{name : 'swim',label: 'Swim',hour:1, cal:450}}/>
      <ExerciseListItem  item={{name : 'dance-pole',label: 'Dance',hour:1, cal:400}}/>
      <ExerciseListItem  item={{name : 'jump-rope',label: 'Jump Rope',hour:2, cal:275}}/>
      
      </View>
      </ScrollView>
    </View>
  );
};

export default SearchExercise;

const styles = StyleSheet.create({
  container : {
    width : '100%',
    backgroundColor : COLORS.primary
  },
  header: {
    height : 170,
    width : '100%',
  },
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: "20%"
  },
  input: {
    height: 50,
    width : '85%',
    color : '#7F7F7F'
  },
  container_1: {
    backgroundColor : '#EEEEEE',
    borderRadius : 30
  },
  search : {
    height : 50,
    width : '90%',
    backgroundColor : '#FFF',
    justifyContent : 'center',
    marginTop : 15,
    alignItems : 'center',
    marginHorizontal : '5%',
    borderRadius : 250,

  }
});