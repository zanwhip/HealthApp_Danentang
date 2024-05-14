import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { COLORS } from '../constants';

const SignUpScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('BottomTabNavigation');
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign
            name='arrowleft'
            size={27}
            color='black'
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.signup}>Sign Up</Text>
      </View>
      <View
        style={{
          marginHorizontal: 40,
          marginTop: 20,
          width: '80%',
          alignContent: 'çenter',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '700' }}>
          Let’s get started! Create your account.
        </Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <TextInput
          style={styles.input}
          placeholder='Email Address'
          keyboardType='email-address'
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Password'
          keyboardType='visible-password'
        />
        <Text style={{ marginLeft: 29, color: '#ADADAD', top: -10 }}>
          10 characters minimum
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          alignItems: 'center',
          paddingHorizontal: '7.5%',
        }}
      >
        <Text style={{ color: '#ADADAD', marginTop: 30, textAlign: 'center' }}>
          By signing up for MyFitnessPal, you are agreeing to our{' '}
          <Text style={{ color: COLORS.primary }}>Privacy Policy</Text> and{' '}
          <Text style={{ color: COLORS.primary }}>Terms</Text>.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Next
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 82 }}>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: 120,
              height: 2,
              backgroundColor: '#888888',
              marginHorizontal: 20,
            }}
          ></View>
          <Text style={{ color: '#888888' }}>OR</Text>
          <View
            style={{
              width: 120,
              height: 2,
              backgroundColor: '#888888',
              marginHorizontal: 20,
            }}
          ></View>
        </View>
      </View>
      <View style={{ marginTop: -20 }}>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: '#ADADAD' }}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: '#ADADAD' }}>Continue with Facebook</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '60%',
            marginHorizontal: '20%',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ color: '#ADADAD', textAlign: 'center' }}>
            We will never post anything without your permission.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center items vertically
    marginTop: 60,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 10, // Add space between icon and text
  },
  signup: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: '28%',
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 29,
  },
  button: {
    width: '85%',
    height: 47,
    backgroundColor: '#2A64E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: '7.5%',
  },
  button1: {
    width: '85%',
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: '7.5%',
    borderWidth: 0.2,
  },
});
export default SignUpScreen;
