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

  const handlePasswordReset = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error;
      }
      if (data) {
        showNotification('success', 'Password reset email sent!');
        navigation.navigate('LoginScreen2');
      } else {
        showNotification('error', 'Failed to send reset email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      showNotification('error', 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
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
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Center items vertically
    marginTop: 60,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: '30%',
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
