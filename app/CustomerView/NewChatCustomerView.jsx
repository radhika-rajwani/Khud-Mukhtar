// ChatScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [negotiatedAmount, setNegotiatedAmount] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="#333" />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={18} color="#666" />
            <Text style={styles.locationText}>Clifton, Karachi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Feather name="menu" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      
      {/* Chat Header */}
      <View style={styles.chatHeader}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.chatHeaderTitle}>Shabana</Text>
      </View>
      
      {/* Order Placement Section */}
      <View style={styles.orderSection}>
        <Text style={styles.orderText}>
          Enter the negotiated amount to place your order
        </Text>
        <TouchableOpacity style={styles.placeOrderButton}>
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      
      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer}>
        {/* Sent Message */}
        <View style={styles.sentMessageContainer}>
          <View style={styles.sentMessage}>
            <Text style={styles.sentMessageText}>
              Assalam-o-Alaikum, can you stitch clothes for me by this weekend?
            </Text>
            <Text style={styles.messageTime}>10:10 ✓</Text>
          </View>
        </View>
        
        {/* Audio Message */}
        <View style={styles.sentMessageContainer}>
          <View style={styles.sentAudioMessage}>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={16} color="#fff" />
            </TouchableOpacity>
            <View style={styles.audioWaveform}>
              {[...Array(15)].map((_, i) => (
                <View 
                  key={i} 
                  style={[
                    styles.waveformBar, 
                    { height: 4 + Math.random() * 12 }
                  ]} 
                />
              ))}
            </View>
            <Text style={styles.audioTime}>0:50</Text>
            <Text style={styles.messageTime}>10:16 ✓</Text>
          </View>
        </View>
        
        {/* Received Message */}
        <View style={styles.receivedMessageContainer}>
          <View style={styles.receivedMessage}>
            <Text style={styles.receivedMessageText}>
              Wa Alaikum Assalam!{'\n'}
              Yes, I can. What would you like me to stitch?
            </Text>
            <Text style={styles.receivedMessageTime}>10:20</Text>
          </View>
        </View>
        
        {/* Quick Reply Options */}
        <View style={styles.quickReplyContainer}>
          <TouchableOpacity style={styles.magicButton}>
            <Ionicons name="color-wand-outline" size={24} color="#6B7AFF" />
          </TouchableOpacity>
          
          <View style={styles.quickReplyOptions}>
            <TouchableOpacity style={styles.quickReplyButton}>
              <Text style={styles.quickReplyText}>2 piece suit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickReplyButton}>
              <Text style={styles.quickReplyText}>1 piece kurti</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  locationText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  chatHeaderTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
  orderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderText: {
    fontSize: 14,
    color: '#999',
    flex: 1,
    paddingRight: 10,
  },
  placeOrderButton: {
    backgroundColor: '#f8f8ff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0ff',
  },
  placeOrderButtonText: {
    color: '#a095ff',
    fontWeight: '500',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sentMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  sentMessage: {
    backgroundColor: '#1a75ff',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '80%',
  },
  sentMessageText: {
    color: 'white',
    fontSize: 15,
  },
  messageTime: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  sentAudioMessage: {
    backgroundColor: '#1a75ff',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  audioWaveform: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 20,
    marginHorizontal: 5,
  },
  waveformBar: {
    width: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 1,
    borderRadius: 1,
  },
  audioTime: {
    color: 'white',
    fontSize: 12,
    marginRight: 5,
  },
  receivedMessageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  receivedMessage: {
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxWidth: '80%',
  },
  receivedMessageText: {
    color: '#333',
    fontSize: 15,
  },
  receivedMessageTime: {
    color: '#999',
    fontSize: 11,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  quickReplyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  magicButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0ff',
    marginRight: 10,
  },
  quickReplyOptions: {
    flexDirection: 'row',
  },
  quickReplyButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  quickReplyText: {
    color: '#333',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333',
  },
  micButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;