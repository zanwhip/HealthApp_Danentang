import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import React from 'react';

const SwitchButton = ({ switchBtnContent }) => {
  return (
    <View style={styles.type}>
      {switchBtnContent ? (
        switchBtnContent.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={data.onChecked ? styles.onCheckTrue : styles.onCheckFalse}
            onPress={data.onPress}
          >
            <Text
              style={
                data.onChecked ? styles.textCheckTrue : styles.textCheckFalse
              }
            >
              {data.text}
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  type: {
    width: '50%',
    height: 30,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    flexDirection: 'row',
  },
  onCheckTrue: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
  onCheckFalse: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  textCheckTrue: {
    color: '#fff',
  },
  textCheckFalse: {
    color: COLORS.primary,
  },
});
export default SwitchButton;
