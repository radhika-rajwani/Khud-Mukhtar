import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const PasswordInput = ({ password, setPassword }) => {
  const [hide, setHide] = useState(true);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        secureTextEntry={hide}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => setHide(!hide)}>
        <Ionicons
          name={hide ? 'eye-off-outline' : 'eye-outline'}
          size={20}
          color="#999"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput; 