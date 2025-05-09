import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import PasswordInput from './PasswordInput';
import { useRouter } from 'expo-router';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    password: '',
    country: '',
    city: '',
    address: '',
  });
  const router = useRouter();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    router.replace('/AuthScreen?isLogin=true');
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={formData.fullName}
        onChangeText={(value) => handleChange('fullName', value)}
      />

      <View style={styles.phoneContainer}>
        <Text style={styles.phonePrefix}>+92</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="0 00 00 00 00"
          keyboardType="phone-pad"
          value={formData.mobile}
          onChangeText={(value) => handleChange('mobile', value)}
        />
      </View>

      <PasswordInput
        password={formData.password}
        setPassword={(value) => handleChange('password', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        value={formData.country}
        onChangeText={(value) => handleChange('country', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(value) => handleChange('city', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(value) => handleChange('address', value)}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.registerLink}>Log in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default RegisterForm; 