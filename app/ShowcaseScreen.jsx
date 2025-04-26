import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShowcaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Showcase your{"\n"}designs and uniquely{"\n"}stitched clothes
      </Text>
      <TouchableOpacity style={styles.plusButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 32,
    marginBottom: 0,
    lineHeight: 32,
  },
  plusButton: {
    position: 'absolute',
    bottom: 48,
    right: 32,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});

export default ShowcaseScreen; 