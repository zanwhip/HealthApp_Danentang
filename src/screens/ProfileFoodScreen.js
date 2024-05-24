import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import supabase from '../config/database';
import { useSelector } from 'react-redux';

const CardFood = ({ item }) => {
  return (
    <View style={styles.box}>
      <Image source={item.image} style={{ height: 100, width: 170 }} />
      <View style={styles.description}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '700' }}>
            {item.nameFood}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '400' }}>
            {item.caloFood} calories
          </Text>
        </View>
      </View>
    </View>
  );
};

const ProfileFoodScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dataRecommendFood = [
    {
      nameFood: 'Soup',
      caloFood: 495,
      image: require('../assets/img/anh11.png'),
    },
    {
      nameFood: 'Hash browns',
      caloFood: 495,
      image: require('../assets/img/anh12.png'),
    },
    {
      nameFood: 'Tacos',
      caloFood: 495,
      image: require('../assets/img/anh13.png'),
    },
    {
      nameFood: 'Pizza',
      caloFood: 350,
      image: require('../assets/img/anh21.png'),
    },
    {
      nameFood: 'Salad',
      caloFood: 150,
      image: require('../assets/img/anh22.png'),
    },
    {
      nameFood: 'Potato',
      caloFood: 100,
      image: require('../assets/img/anh33.png'),
    },
  ];

  const UserId = useSelector((state) => state.reducers);

  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from('User')
      .select()
      .eq('IdUser', UserId[UserId.length - 1].uid);
    if (error) {
      console.log(error);
    } else {
      data.map((item) => {
        setName(item.Name);
        setEmail(item.Email);
      });
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigation.navigate('LoginScreen1');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            width: '100%',
          }}
        >
          <Image
            source={require('../assets/img/user.jpg')}
            style={{ height: 70, width: 70, borderRadius: 35 }}
          />
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.user}>{name}</Text>
            <Text style={styles.userdes}>{email}</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <MaterialCommunityIcons name='logout' size={30} color='white' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 20, height: '75%' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title1}>Recommended Recipes</Text>
          <FontAwesome5 name='crown' size={20} color='black' />
        </View>
        <FlatList
          style={{ marginTop: 25 }}
          data={dataRecommendFood}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <CardFood item={item} />}
        />
      </View>
    </View>
  );
};

export default ProfileFoodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },

  user: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userdes: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    height: 130,
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    paddingTop: 20,
  },
  type: {
    width: '80%',
    height: 30,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
  },

  box: {
    width: 170,
    height: 160,
    marginRight: 10,
  },

  description: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
