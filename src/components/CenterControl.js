import { View, Text, Platform, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const CenterControl = ({ focused, navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        height: Platform.OS == 'ios' ? 80 : 60,
        width: Platform.OS == 'ios' ? 80 : 60,
        top: Platform.OS == 'ios' ? -30 : -20,
        borderRadius: Platform.OS == 'ios' ? 50 : 30,
        borderWidth: 10,
        borderColor: '#fff',
      }}
    >
      <MaterialIcons
        name='add'
        size={50}
        color={focused ? COLORS.focus : COLORS.unfocus}
      />
      {focused && (
        <>
          {/* Three circles positioned above the center */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: COLORS.primary,
              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -50, // Adjust as needed
              left: '-50%', // Center horizontally
              transform: [{ translateX: -45 }], // Adjust position to center
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('AddExercise')}
          >
            <MaterialIcons name='directions-run' size={36} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: COLORS.primary,
              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -75, // Adjust as needed
              left: '20%', // Center horizontally
              transform: [{ translateX: -15 }], // Adjust position to center
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('APIcodeFood')}
          >
            <MaterialCommunityIcons
              name='silverware-fork-knife'
              size={36}
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',

              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -50, // Adjust as needed
              left: '100%', // Center horizontally
              transform: [{ translateX: 15 }], // Adjust position to center
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name='barcode-scan'
              size={36}
              color='white'
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CenterControl;
