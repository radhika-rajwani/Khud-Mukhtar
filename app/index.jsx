import {Text, View } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>HOME</Text>

      <Link href="/HomeScreen">Explore Tailors Page</Link>
      <Link href="/UserTypeSelectionScreen">View Services Offered</Link>
      <Link href="/TailorProfile">Tailor Profile</Link>
      <Link href="/AuthScreen">Login / Register</Link>
      <Link href="/Chats">Chats</Link>
      <Link href="/Notifications">Notifications</Link>
      <Link href="/Orders">Orders</Link>
      <Link href="/SidebarScreen">Side Bar</Link>
      {/* <Link href="/Profile">Profile</Link> */}
      {/* <Link href="/Settings">Settings</Link> */}
    </View>
  );
};

export default Home;