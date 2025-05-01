import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
import PasswordInput from './PasswordInput';
import { Link } from 'expo-router';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <PasswordInput password={password} setPassword={setPassword} />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Don't have an account?{' '}
        <Text style={styles.registerLink}>Register</Text>
      </Text>
    </>
  );
};

export default LoginForm; 