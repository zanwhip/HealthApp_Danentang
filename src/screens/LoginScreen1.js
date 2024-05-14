import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

const LoginScreen1 = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>myfitnesspal</Text>
        <View style={{ marginTop: 400 }}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up For Free</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.button1}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Make the background fill the entire screen
    backgroundColor: 'rgba(40, 100, 230, 1)',
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: '',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: 209,
    height: 39,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 100,
  },
  button1: {
    width: 209,
    height: 39,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: '',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(40, 100, 230, 1)',
  },
  login: {
    fontFamily: '',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});

export default LoginScreen1;
