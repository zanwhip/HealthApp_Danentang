import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

import SwitchButton from '../components/SwitchButton';
import { addItemToBreakfast } from '../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

//  // Thay đổi selector để lấy trạng thái giỏ hàng từ state thay vì lấy toàn bộ state
// useEffect(() => {
//   console.log('Current items:', items);
// }, [items]);
const BreakfastListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: 20,
        margin: 8,
        gap: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: 'dimgray' }}>{item.cal} cal</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'dimgray' }}>{item.quantity}</Text>
          <Text style={{ color: 'dimgray' }}> {item.unit}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => dispatch(addItemToBreakfast(item))}>
        <AntDesign name='pluscircle' size={24} color='#2A64E4' />
      </TouchableOpacity>
    </View>
  );
};
const RecentsBreakfast = ({ recentsItems }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {recentsItems.map((item, index) => (
        <BreakfastListItem
          item={{
            label: item.label,
            cal: item.cal,
            quantity: item.quantity,
            unit: item.unit,
          }}
        />
      ))}
    </ScrollView>
  );
};

const FavoritesBreakfast = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BreakfastListItem
        item={{
          label: 'Sweet Potato Chips',
          cal: 150,
          quantity: 1,
          unit: 'bag',
        }}
      />
      <BreakfastListItem
        item={{ label: 'Acai Bowl', cal: 130, quantity: 1, unit: 'bowl' }}
      />
      <BreakfastListItem
        item={{
          label: 'Roasted Garlic Hummus',
          cal: 40,
          quantity: 2,
          unit: 'tbsp',
        }}
      />
      <BreakfastListItem
        item={{ label: 'Clementines', cal: 2, quantity: 2, unit: 'g' }}
      />
    </ScrollView>
  );
};

const SearchBreakfast = ({ navigation }) => {
  var [recents, setRecents] = useState(true);
  var [favorites, setFavorites] = useState(false);

  const switchBtnContent = [
    {
      id: 1,
      text: 'Recents',
      onChecked: recents,
      onPress: () => {
        if (recents) {
          setRecents(false);
          setFavorites(true);
        } else {
          setRecents(true);
          setFavorites(false);
        }
      },
    },
    {
      id: 2,
      text: 'Favorites',
      onChecked: favorites,
      onPress: () => {
        if (favorites) {
          setFavorites(false);
          setRecents(true);
        } else {
          setFavorites(true);
          setRecents(false);
        }
      },
    },
  ];

  const recentsItems = [
    {
      label: 'Goldfish',
      cal: '130 cal',
      quantity: 1,
      unit: 'bag',
    },
    {
      label: 'Dates',
      cal: '141 cal',
      quantity: 50,
      unit: 'g',
    },
    {
      label: 'Extra Firm Tofu',
      cal: '212 cal',
      quantity: 200,
      unit: 'g',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginTop: 60, flexDirection: 'row' }}>
          <TouchableOpacity>
            <AntDesign
              name='arrowleft'
              size={30}
              color='white'
              style={{ marginLeft: 10, justifyContent: 'center' }}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>
            Add Breakfast
            <AntDesign name='caretdown' size={16} color='#FFFFFF' />
          </Text>
        </View>
        <View style={styles.search}>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <FontAwesome5
              name='search'
              size={20}
              color='black'
              style={{ marginTop: 13, marginRight: 2 }}
            />
            <TextInput style={styles.input} placeholder='Search...' />
            <AntDesign
              name='qrcode'
              size={24}
              color='black'
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
      </View>

      <View style={styles.container_1}>
        <View
          style={{
            marginTop: 25,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              shadowOpacity: 0.2,
              marginHorizontal: 10,
              flex: 1,
              margin: 0,
            }}
          >
            <SwitchButton switchBtnContent={switchBtnContent} />
          </View>
          <MaterialIcons
            name='filter-alt'
            size={34}
            color='black'
            style={{ marginRight: 10 }}
          />
        </View>
        {recents ? (
          <RecentsBreakfast recentsItems={recentsItems} />
        ) : (
          <FavoritesBreakfast />
        )}
      </View>
    </View>
  );
};

export default SearchBreakfast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  header: {
    height: 170,
    width: '100%',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: '20%',
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
    height: 50,
    width: '90%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
    marginHorizontal: '5%',
    borderRadius: 250,
  },
});
