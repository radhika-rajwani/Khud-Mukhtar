import {Text, View } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      
      <Link href="/UserTypeSelectionScreen">Home</Link>

      <Link href="/CustomerView/HomeScreen">Explore Tailors Page</Link>
      <Link href="/UserTypeSelectionScreen">View Services Offered</Link>
      <Link href="/CustomerView/TailorProfile">Tailor Profile</Link>
      <Link href="/AuthScreen">Login / Register</Link>
      <Link href="/CreateProfileScreen">Create Profile</Link>
      <Link href="/TailorView/Chats">Chats</Link>
      <Link href="/CustomerView/Customer_Notifications">Customer Notifications</Link>
      <Link href="/TailorView/Tailor_Notifications">Tailor Notifications</Link>
      <Link href="/Orders">Orders</Link>
      <Link href="/CustomerView/SidebarScreen">Side Bar</Link>
      <Link href="/ProfileEditScreen">Profile Edit Screen</Link>
      <Link href="/ShowcaseScreen">Showcase Screen</Link>
      
      {/* <Link href="/Profile">Profile</Link> */}
      {/* <Link href="/Settings">Settings</Link> */}
    </View>
  );
};

export default Home;