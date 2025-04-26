import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Menu, ChevronLeft, Home, MessageCircle, Bell, Bookmark } from 'lucide-react-native';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const SidebarScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <Menu size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.location}>Clifton, Karachi</Text>
        <View style={styles.circle} />
      </View>

      {isOpen ? (
        <Animated.View style={styles.sidebar}>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.profile}>
            <View style={styles.profileCircle}>
              <Text style={styles.plus}>+</Text>
            </View>
            <Text style={styles.username}>Radhika Rajwani</Text>
          </View>

          <View style={styles.menuItem}>
            <Link href="/HomeScreen" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <Home size={20} color="#000" />
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="/Chats" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <MessageCircle size={20} color="#000" />
                <Text style={styles.menuText}>Chats</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="/Notifications" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <Bell size={20} color="#000" />
                <Text style={styles.menuText}>Notifications</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="/Orders" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <Bookmark size={20} color="#000" />
                <Text style={styles.menuText}>Orders</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  sidebar: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    height: '100%',
    width: screenWidth,
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  plus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SidebarScreen;
