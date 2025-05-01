import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TabSwitcher from './components/auth/TabSwitcher';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import styles from './components/auth/styles';
import { useLocalSearchParams, useRouter } from 'expo-router';

const AuthScreen = () => {
  const router = useRouter();
  const { isLogin: isLoginParam } = useLocalSearchParams();
  const [isLogin, setIsLogin] = useState(isLoginParam === 'false' ? false : true);

  useEffect(() => {
    if (isLoginParam !== undefined) {
      setIsLogin(isLoginParam === 'false' ? false : true);
    }
  }, [isLoginParam]);

  const handleTabChange = (newIsLogin) => {
    setIsLogin(newIsLogin);
    router.replace(`/AuthScreen?isLogin=${newIsLogin}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khud Mukhtar</Text>
      <TabSwitcher isLogin={isLogin} setIsLogin={handleTabChange} />
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default AuthScreen; 