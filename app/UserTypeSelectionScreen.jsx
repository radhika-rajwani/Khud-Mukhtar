import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const UserTypeSelectionScreen = ({ onSelectUserType }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelectUserType('tailor')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Tailor</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>or</Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelectUserType('user')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 15,
    fontSize: 16,
    color: '#000000',
  },
});

export default UserTypeSelectionScreen;