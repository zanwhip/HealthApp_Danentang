import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const HeaderHomePages = (title) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')}
          />
        </TouchableOpacity>

        <Text style={styles.textWelcome}>
          {title ? 'Good Morning!' : title}
        </Text>
        <Image source={require('../../assets/clarity_notification-line.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    height: 100,
    width: '100%',
  },
  textWelcome: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '700',
  },
  avatar: {
    width: 55,
    height: 55,
  },
});

export default HeaderHomePages;
