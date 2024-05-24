import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { COLORS } from '../constants';
import supabase from '../config/database';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [userSession, setUserSession] = useState(null);

  const resetPassword = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      // navigation.navigate('ResetPassword');
      supabase.auth.onAuthStateChange(async (event, session) => {
        setUserSession(session);
        if (!userSession?.user) navigation.navigate('ResetPassword');
      });
    }
    console.log(data);
    if (!data) {
      Alert.alert('Please check your inbox for email verification!');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder='Email Address'
          keyboardType='email-address'
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={resetPassword}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Sending...' : 'Countinue '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    // marginHorizontal: '30%',
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
});

export default ForgotPasswordScreen;
