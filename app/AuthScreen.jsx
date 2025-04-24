import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TabSwitcher from './components/auth/TabSwitcher';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import styles from './components/auth/styles';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khud Mukhtar</Text>
      <TabSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default AuthScreen; 