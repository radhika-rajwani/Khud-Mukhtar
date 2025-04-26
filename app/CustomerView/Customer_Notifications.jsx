import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { MapPin, Menu, ArrowLeft } from 'lucide-react-native';

const NotificationItem = ({ text, time }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationText}>{text}</Text>
    <Text style={styles.timeText}>{time}</Text>
  </View>
);

const Customer_Notifications = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.timeText}>19:02</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.signalIcons}>
            {/* Signal icons would go here */}
          </View>
        </View>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Menu size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <MapPin size={20} color="#000" />
          <Text style={styles.locationText}>Clifton, Karachi</Text>
        </View>
        
        <View style={styles.profilePicPlaceholder} />
      </View>

      {/* Back Button and Title */}
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <View style={styles.notificationsList}>
        <NotificationItem text="Tailor accepted your order" time="10:25" />
        <View style={styles.separator} />
        <NotificationItem text="Order pending" time="10:25" />
        <View style={styles.separator} />
        <NotificationItem text="Tailor has completed your order" time="10:25" />
        <View style={styles.separator} />
        <NotificationItem text="Give a review" time="10:25" />
        <View style={styles.separator} />
        <NotificationItem text="Order ready for pickup" time="10:25" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerLeft: {},
  headerRight: {
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 14,
    color: '#000',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#000',
  },
  profilePicPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'relative',
  },
  backButton: {
    marginRight: 16,
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  notificationsList: {
    paddingHorizontal: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  notificationText: {
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default Customer_Notifications; 