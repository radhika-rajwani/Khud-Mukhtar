import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TabSwitcher = ({ isLogin, setIsLogin }) => (
  <View style={styles.tabContainer}>
    <TouchableOpacity
      style={[styles.tab, isLogin && styles.activeTab]}
      onPress={() => setIsLogin(true)}
    >
      <Text style={[styles.tabText, isLogin && styles.activeTabText]}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, !isLogin && styles.activeTab]}
      onPress={() => setIsLogin(false)}
    >
      <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>Register</Text>
    </TouchableOpacity>
  </View>
);

export default TabSwitcher; 