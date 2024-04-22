import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.text}>myfitnesspal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Make the background fill the entire screen
    backgroundColor: 'rgba(40, 100, 230, 1)', // RGB values are converted to 0-1 range
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: '', // Assuming Inter font is available in your project
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    
  },
});

export default LoginScreen;
