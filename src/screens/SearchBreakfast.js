import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';   
import { COLORS } from "../constants";
import CustomSwitch from '../components/CustomSwitch';
const BreakfastListItem = ({item}) => {
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
     
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: 'dimgray'  }}>{item.cal} cal</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: 'dimgray'}}>{item.quantity}</Text>
        <Text style={{ color: 'dimgray'  }}> {item.unit}</Text>
        </View>
    
      </View>

      <AntDesign name="pluscircle" size={24} color="#2A64E4" />
    </View>
  );
};


const SearchBreakfast = () => {
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
    <Text style={styles.Text}>Add Breakfast <AntDesign name="caretdown" size={16} color="#FFFFFF" /></Text>
    
    </View>
    <View style={styles.search}>
    <View style={{ flexDirection : 'row',marginHorizontal : 10  }}>
    <FontAwesome5 name="search" size={20} color="black" style={{ marginTop  : 13, marginRight : 2 }} />
    <TextInput style={styles.input}
          placeholder="Search..." />  
    <AntDesign name="qrcode" size={24} color="black" style={{marginTop  : 10}}/>   
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
  
      <BreakfastListItem  item={{ label: 'Goldfish',cal:130, quantity:1,unit:'bag'}}/>
      <BreakfastListItem   item={{ label: 'Dates',cal:141, quantity:50,unit:'g'}}/>
      <BreakfastListItem    item={{label: 'Extra Firm Tofu',cal:212, quantity:200,unit:'g'}}/>
      <BreakfastListItem    item={{label: 'Sweet Potato Chips',cal:150, quantity:1,unit:'bag'}}/>
      <BreakfastListItem    item={{label: 'Acai Bowl',cal:130, quantity:1,unit:'bowl'}}/>
      <BreakfastListItem   item={{label: 'Roasted Garlic Hummus',cal:40, quantity:2,unit:'tbsp'}}/>
      <BreakfastListItem   item={{label: 'Clementines',cal:2, quantity:2,unit:'g'}}/>
      
      </View>
      </ScrollView>
    </View>
  );
};

export default SearchBreakfast;

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