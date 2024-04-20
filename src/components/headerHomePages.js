import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const HeaderHomePages = (title) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
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
    justifyContent: 'space-between',
    width: '100%',
  },
  textWelcome: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '700',
  },
  avatar: {
    width: 55,
    height: 55,
  },
});

export default HeaderHomePages;
