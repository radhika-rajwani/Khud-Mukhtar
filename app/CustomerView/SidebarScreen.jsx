import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const SidebarScreen = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const router = useRouter(); 

  const handleMenuPress = () => {
    if (isOpen) {
      setIsOpen(false);
      router.push('/CustomerView/HomeScreen'); 
      setIsOpen(true); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Hamburger menu */}
        <TouchableOpacity onPress={handleMenuPress}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>

        <Text style={styles.location}>Clifton, Karachi</Text>
        <View style={styles.circle} />
      </View>

      {/* Show Sidebar only if isOpen is true */}
      {isOpen && (
        <Animated.View style={styles.sidebar}>
          <View style={styles.profile}>
            <View style={styles.profileCircle}>
              <Text style={styles.plus}>+</Text>
            </View>
            <Text style={styles.username}>Radhika Rajwani</Text>
          </View>

          <View style={styles.menuItem}>
            <Link href="/CustomerView/HomeScreen" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <Ionicons name="home" size={20} color="#000" />
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <FontAwesome5 name="comment-dots" size={20} color="#000" />
                <Text style={styles.menuText}>Chats</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="/CustomerView/Customer_Notifications" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <Ionicons name="notifications" size={20} color="#000" />
                <Text style={styles.menuText}>Notifications</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.menuItem}>
            <Link href="/CustomerView/Customer_Orders" asChild>
              <TouchableOpacity style={styles.menuRow}>
                <MaterialCommunityIcons name="bookmark" size={20} color="#000" />
                <Text style={styles.menuText}>Orders</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </Animated.View>
      )}
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
    width: 60,             
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,       
  },
  plus: {
    fontSize: 24,          
    fontWeight: 'bold',
    color: '#555',          
  },
  username: {
    fontSize: 20,           
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',          
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
    color: '#333',
  },
});

export default SidebarScreen;
