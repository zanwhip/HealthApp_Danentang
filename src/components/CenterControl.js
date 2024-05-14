import { View, Text, Platform } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const CenterControl = ({ focused }) => {
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
      {focused && (
        <>
          {/* Three circles positioned above the center */}
          <View
            style={{
              position: 'absolute',
              backgroundColor: COLORS.primary,
              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -50, // Adjust as needed
              left: '-50%', // Center horizontally
              transform: [{ translateX: -45 }], // Adjust position to center
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: COLORS.primary,
              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -75, // Adjust as needed
              left: '20%', // Center horizontally
              transform: [{ translateX: -15 }], // Adjust position to center
            }}
          />
          <View
            style={{
              position: 'absolute',

              height: 60,
              width: 60,
              borderRadius: 30, // Half of height and width for a circle
              top: -50, // Adjust as needed
              left: '100%', // Center horizontally
              transform: [{ translateX: 15 }], // Adjust position to center
              backgroundColor: COLORS.primary,
            }}
          />
        </>
      )}
    </View>
  );
};

export default CenterControl;
