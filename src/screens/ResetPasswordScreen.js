import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import supabase from '../config/database';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resetPassword();
  }, []);
  const resetPassword = async () => {
    if (password === retypePassword) {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        console.log(error);
      } else {
        console.log('ok');
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder='Enter your new password'
          secureTextEntry={true}
        />
        <TextInput
          value={retypePassword}
          onChangeText={setRetypePassword}
          style={styles.input}
          placeholder='Retype your new password'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={resetPassword}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Sending...' : 'Reset '}
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

export default ResetPasswordScreen;
