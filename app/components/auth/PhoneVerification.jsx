import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
import styles from './styles';

// Reusable code input field
const CodeInput = ({ value, setValue, codeLength = 6 }) => {
  const inputs = useRef([]);

  const handleChange = (text, idx) => {
    if (/^\d*$/.test(text)) {
      const newValue = value.split('');
      newValue[idx] = text[text.length - 1] || '';
      setValue(newValue.join(''));
      if (text && idx < codeLength - 1) {
        inputs.current[idx + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, idx) => {
    if (e.nativeEvent.key === 'Backspace' && !value[idx] && idx > 0) {
      inputs.current[idx - 1].focus();
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
      {[...Array(codeLength)].map((_, idx) => (
        <TextInput
          key={idx}
          ref={ref => (inputs.current[idx] = ref)}
          style={[_styles.codeInputBox]}
          keyboardType="number-pad"
          maxLength={1}
          value={value[idx] || ''}
          onChangeText={text => handleChange(text, idx)}
          onKeyPress={e => handleKeyPress(e, idx)}
          returnKeyType="done"
          textAlign="center"
        />
      ))}
    </View>
  );
};

const PhoneVerification = ({
  phone = '+33 2 94 27 84 11',
  codeLength = 6,
  code,
  setCode,
  onVerify,
  loading = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your{"\n"}Phone Number</Text>
      <Text style={{ textAlign: 'center', color: '#444', marginBottom: 25 }}>
        {"We've sent an SMS with an activation\ncode to your phone "}
        <Text style={{ fontWeight: 'bold' }}>{phone}</Text>
      </Text>
      <CodeInput value={code} setValue={setCode} codeLength={codeLength} />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onVerify}
        disabled={code.length !== codeLength || loading}
      >
        <Text style={styles.loginButtonText}>{loading ? 'Verifying...' : 'Verify'}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Local styles for code input boxes
const _styles = StyleSheet.create({
  codeInputBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginHorizontal: 6,
    fontSize: 22,
    backgroundColor: '#fff',
  },
});

export default PhoneVerification; 