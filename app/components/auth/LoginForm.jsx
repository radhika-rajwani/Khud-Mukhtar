import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    router.replace('/AuthScreen?isLogin=false');
  };

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

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default LoginForm; 