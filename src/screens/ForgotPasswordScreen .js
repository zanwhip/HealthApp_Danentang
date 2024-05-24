import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import supabase from '../config/database';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        navigation.navigate('ResetPassword');
      }
    });
  }, []);

  const resetPassword = async () => {
    setLoading(true);
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    setLoading(false);

    if (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Please check your inbox for email verification!');
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
          {loading ? 'Sending...' : 'Continue'}
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
