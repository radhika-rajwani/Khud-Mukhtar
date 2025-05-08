import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const TailorCard = ({ name, description, rating, isVerified, link }) => (
  <View style={styles.tailorCard}>
    <View style={styles.profileImagePlaceholder}>
      <FontAwesome5 name="user-circle" size={60} color="#DDD" />
    </View>
    <View style={styles.tailorInfo}>
      <Link href={link}>
        <Text style={styles.tailorName}>{name}</Text>
      </Link>
      <Text style={styles.tailorDescription}>{description}</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>{rating}</Text>
        <AntDesign name="star" size={16} color="#FFC107" style={styles.starIcon} />
        {isVerified && (
          <MaterialCommunityIcons name="check-circle" size={16} color="#2196F3" style={styles.verifiedIcon} />
        )}
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/CustomerView/SidebarScreen">
          <Ionicons name="menu" size={24} color="#333" />
        </Link>

        <View style={styles.locationRow}>
          <MaterialCommunityIcons name="map-marker" size={16} color="#777" style={styles.locationIcon} />
          <Text style={styles.locationText}>Clifton, Karachi</Text>
        </View>

        <View style={styles.profilePlaceholder}>
          <FontAwesome5 name="user-circle" size={35} color="#DDD" />
        </View>
      </View>

      <View style={styles.greeting}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.userName}>Radhika Rajwani</Text>
      </View>

      <Text style={styles.sectionTitle}>Tailors near you</Text>

      {/* Tailor List */}
      <ScrollView style={styles.tailorList}>
        <TailorCard
          name="Shabana"
          description="Clifton, Karachi"
          rating="4.7"
          isVerified={true}
          link="CustomerView/TailorProfile"
        />
        <TailorCard
          name="Farzana"
          description="Defence Phase 2, Karachi"
          rating="4.8"
          isVerified={false}
          link="CustomerView/TailorProfile"
        />
        <TailorCard
          name="Ruksana"
          description="Defence Phase 3, Karachi"
          rating="4.9"
          isVerified={false}
          link="CustomerView/TailorProfile"
        />
        <TailorCard
          name="Ruksana"
          description="Defence Phase 3, Karachi"
          rating="4.9"
          isVerified={false}
          link="CustomerView/TailorProfile"
        />
      </ScrollView>

      {/* See More Button */}
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See More</Text>
        <Ionicons name="chevron-forward" size={20} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#777',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'System',
  },
  profilePlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    marginBottom: 25,
  },
  helloText: {
    fontSize: 20,
    color: '#555',
    fontFamily: 'System',
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'System',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    fontFamily: 'System',
  },
  tailorList: {
    marginBottom: 20,
  },
  tailorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DDD',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tailorInfo: {
    flex: 1,
  },
  tailorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'System',
  },
  tailorDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    fontFamily: 'System',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
    fontFamily: 'System',
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  verifiedIcon: {
    width: 15,
    height: 15,
  },
  seeMoreButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  seeMoreText: {
    color: '#007AFF',
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'System',
  },
});

export default HomeScreen;
