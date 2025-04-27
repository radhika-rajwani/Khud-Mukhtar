import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import TabSwitcher from './components/auth/TabSwitcher';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import styles from './components/auth/styles';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register } = useLocalSearchParams();

  useEffect(() => {
    if (register === 'true') {
      setIsLogin(false);
    }
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khud Mukhtar</Text>
      <TabSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default AuthScreen; 