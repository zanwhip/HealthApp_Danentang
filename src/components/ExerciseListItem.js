import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
  

export default ExerciseListItem

const styles = StyleSheet.create({})