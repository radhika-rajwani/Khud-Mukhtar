import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Home = () => {
  return (
    <View>
      <Text>HOME</Text>
      <Link href='/HomeScreen'>explore tailors Page</Link>
      <Link href='/UserTypeSelectionScreen'>view services offered</Link>
      <Link href='/TailorProfile'>tailor profile</Link>
      <Link href="/AuthScreen">Login / Register</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})