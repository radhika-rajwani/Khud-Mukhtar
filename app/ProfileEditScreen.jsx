import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileEditScreen = () => {
  const [bio, setBio] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#444" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>S</Text>
          </View>
          <TouchableOpacity style={styles.plusButton}>
            <Ionicons name="add" size={20} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Name */}
      <Text style={styles.name}>Shabana</Text>

      {/* Bio Input */}
      <View style={styles.bioContainer}>
        <TextInput
          style={styles.bioInput}
          placeholder="Add your bio"
          placeholderTextColor="#888"
          value={bio}
          onChangeText={setBio}
          multiline
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#fafafa',
  },
  doneText: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 16,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  avatarWrapper: {
    width: 220,
    height: 180,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    fontSize: 64,
    color: '#888',
    fontWeight: '400',
  },
  plusButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
    marginBottom: 8,
    color: '#222',
  },
  bioContainer: {
    marginHorizontal: 8,
    marginTop: 0,
  },
  bioInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 12,
    fontSize: 16,
    color: '#222',
    textAlignVertical: 'top',
  },
});

export default ProfileEditScreen; 