import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { MapPin, Menu, ArrowLeft, UserCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const Customer_Orders = () => {
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
        
        <View style={styles.profilePicPlaceholder}>
          <UserCircle size={40} color="#DDD" />
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
      </View>

      {/* Order Card */}
      <View style={styles.orderCard}>
        {/* Tailor Info and Status */}
        <View style={styles.orderHeader}>
          <View style={styles.tailorInfo}>
            <UserCircle size={40} color="#DDD" />
            <Text style={styles.tailorName}>Shabana</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Pending</Text>
          </View>
        </View>

        {/* Price */}
        <Text style={styles.price}>500rs</Text>

        {/* Order Details */}
        <Text style={styles.orderDetail}>2 piece</Text>

        {/* Measurements */}
        <View style={styles.measurementsContainer}>
          <Text style={styles.measurementTitle}>measurements:</Text>
          <Text style={styles.measurement}>shoulder: 5 inches</Text>
          <Text style={styles.measurement}>chest: 14 inches</Text>
          <Text style={styles.measurement}>shirt length: 34 inches</Text>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'relative',
  },
  backButton: {
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
  orderCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tailorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tailorName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  statusContainer: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: '#FF9800',
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  orderDetail: {
    fontSize: 16,
    marginBottom: 12,
  },
  measurementsContainer: {
    gap: 4,
  },
  measurementTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  measurement: {
    fontSize: 14,
    color: '#666',
  },
});

export default Customer_Orders; 