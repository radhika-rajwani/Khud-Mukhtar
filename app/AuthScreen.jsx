import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import TabSwitcher from './components/auth/TabSwitcher';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import styles from './components/auth/styles';
import { useLocalSearchParams, useRouter } from 'expo-router';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khud Mukhtar</Text>
      <TabSwitcher isLogin={isLogin} setIsLogin={handleTabChange} />
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default AuthScreen; 