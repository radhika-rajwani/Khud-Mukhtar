import React, { useState } from 'react';


import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const ChatDetailScreen = () => {
  const [message, setMessage] = useState('');
  
  const messages = [
    {
      id: '1',
      text: 'Hey there! 👋',
      time: '10:10',
      isUser: false,
    },
    {
      id: '2',
      text: 'This is your delivery driver from Speedy Chow. I\'m just around the corner from your place. 😊',
      time: '10:10',
      isUser: false,
    },
    {
      id: '3',
      text: 'Hi!',
      time: '10:10',
      isUser: true,
    },
    {
      id: '4',
      isVoiceMessage: true,
      duration: '0:05',
      time: '10:10',
      isUser: true,
    },
    {
      id: '5',
      text: 'No problem at all! I\'ll be there in about 15 minutes.',
      time: '10:11',
      isUser: false,
    },
    {
      id: '6',
      text: 'I\'ll text you when I arrive.',
      time: '10:11',
      isUser: false,
    },
  ];

  const renderMessage = (message) => {
    if (message.isVoiceMessage) {
      return (
        <View style={[styles.messageContainer, message.isUser ? styles.userMessage : styles.otherMessage]} key={message.id}>
          <View style={styles.voiceMessageContent}>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={16} color="#fff" />
            </TouchableOpacity>
            <View style={styles.waveform}>
              {Array(15).fill(0).map((_, i) => (
                <View 
                  key={i} 
                  style={[
                    styles.waveformBar, 
                    { height: Math.random() * 15 + 5 }
                  ]} 
                />
              ))}
            </View>
            <Text style={styles.voiceDuration}>{message.duration}</Text>
          </View>
          <Text style={styles.messageTime}>{message.time}</Text>
        </View>
      );
    }
    
    return (
      <View style={[styles.messageContainer, message.isUser ? styles.userMessage : styles.otherMessage]} key={message.id}>
        <Text style={[styles.messageText, message.isUser ? styles.userMessageText : styles.otherMessageText]}>
          {message.text}
        </Text>
        <Text style={styles.messageTime}>{message.time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu-outline" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={18} color="#000" />
          <Text style={styles.locationText}>Clifton, Karachi</Text>
        </View>
        
        <View style={styles.profileButton}>
          <View style={styles.profileAvatar} />
        </View>
      </View>
      
      {/* Back Button and Name */}
      <View style={styles.subHeader}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.chatName}>Shabana</Text>
        <View style={{ width: 24 }} /> {/* Empty view for alignment */}
      </View>
      
      {/* Order Input */}
      <View style={styles.orderInputContainer}>
        <TextInput
          style={styles.orderInput}
          placeholder="Enter the negotiated amount to place your order"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.placeOrderButton}>
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
      
      {/* Messages */}
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map(message => renderMessage(message))}
      </ScrollView>
      
      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.micButton}>
          <FontAwesome5 name="microphone" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <MaterialCommunityIcons name="send" size={20} color="#888" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  menuButton: {
    padding: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: '500',
  },
  profileButton: {
    padding: 5,
  },
  profileAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 5,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  orderInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginRight: 10,
    fontSize: 14,
  },
  placeOrderButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  messagesContent: {
    padding: 15,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 15,
    borderRadius: 15,
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0066CC',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9E9E9',
  },
  messageText: {
    fontSize: 16,
    marginBottom: 5,
  },
  userMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#000',
  },
  messageTime: {
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#888',
  },
  voiceMessageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  waveform: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    marginRight: 8,
  },
  waveformBar: {
    width: 2,
    backgroundColor: '#fff',
    marginHorizontal: 1,
    borderRadius: 1,
  },
  voiceDuration: {
    fontSize: 12,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    fontSize: 16,
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

export default ChatDetailScreen;