import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import supabase from '../config/database';

const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const updatePassword = async () => {
    // Kiểm tra mật khẩu và mật khẩu nhập lại
    if (password !== retypePassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);

    // Gọi API cập nhật mật khẩu từ Supabase
    const { error } = await supabase.auth.api.updateUser(password);

    setLoading(false);

    if (error) {
      console.error('Error updating password:', error.message);
      Alert.alert('Error', 'Failed to update password. Please try again.');
    } else {
      // Hiển thị thông báo cập nhật mật khẩu thành công và quay lại màn hình đăng nhập
      Alert.alert('Success', 'Password updated successfully.');
      navigation.navigate('LoginScreen2');
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
      <TouchableOpacity style={styles.button} onPress={updatePassword}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Sending...' : 'Reset'}
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

export default ResetPasswordScreen;
