import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MapPin, Menu, ArrowLeft, UserCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const OrderCard = ({ order, onAccept, onReject, onComplete }) => {
  return (
    <View style={styles.orderCard}>
      <View style={styles.customerInfo}>
        <UserCircle size={40} color="#DDD" />
        <Text style={styles.customerName}>{order.customerName}</Text>
      </View>

      <Text style={styles.price}>{order.price}rs</Text>
      <Text style={styles.orderDetail}>{order.pieces} piece</Text>

      <View style={styles.measurementsContainer}>
        <Text style={styles.measurementTitle}>measurements:</Text>
        {order.measurements.map((measurement, index) => (
          <Text key={index} style={styles.measurement}>{measurement}</Text>
        ))}
      </View>

      <View style={styles.actionButtons}>
        {order.status === 'pending' ? (
          <>
            <TouchableOpacity 
              style={[styles.actionButton, styles.acceptButton]} 
              onPress={onAccept}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.actionButton, styles.rejectButton]}
              onPress={onReject}
            >
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
          </>
        ) : order.status === 'accepted' ? (
          <TouchableOpacity 
            style={[styles.actionButton, styles.completeButton]}
            onPress={onComplete}
          >
            <Text style={styles.buttonText}>Click when order is completed</Text>
          </TouchableOpacity>
        ) : order.status === 'completed' ? (
          <View style={[styles.actionButton, styles.completedButton]}>
            <Text style={styles.buttonText}>Order Completed</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const Tailor_Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'Naba',
      price: 500,
      pieces: 2,
      measurements: [
        'shoulder: 5 inches',
        'chest: 14 inches',
        'shirt length: 34 inches'
      ],
      status: 'pending'
    },
    {
      id: 2,
      customerName: 'Radhika',
      price: 500,
      pieces: 2,
      measurements: [
        'shoulder: 5 inches',
        'chest: 14 inches',
        'shirt length: 34 inches'
      ],
      status: 'pending'
    }
  ]);

  const handleAccept = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'accepted' }
        : order
    ));
  };

  const handleReject = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const handleComplete = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'completed' }
        : order
    ));
  };

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

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
      </View>

      {/* Orders List */}
      <ScrollView style={styles.ordersList}>
        {orders.map(order => (
          <OrderCard
            key={order.id}
            order={order}
            onAccept={() => handleAccept(order.id)}
            onReject={() => handleReject(order.id)}
            onComplete={() => handleComplete(order.id)}
          />
        ))}
      </ScrollView>
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
  ordersList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
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
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
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
    marginBottom: 16,
  },
  measurementTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  measurement: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  completeButton: {
    backgroundColor: '#2196F3',
    minWidth: 240,
  },
  completedButton: {
    backgroundColor: '#4CAF50',
    minWidth: 160,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Tailor_Orders; 