import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface Message {
  sender: string;
  timestamp: Date;
  content: string;
  avatar?: string;
}

const MessageList: React.FC<Message[]> = ({ messages }: any) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id}
      renderItem={({ item }) => (
        <View style={styles.messageContainer}>
          <Image source={require('assets/perfil.jpeg')} style={styles.avatar} />

          <View style={styles.messageContent}>
          
            <Text style={styles.senderName}>{item.sender}</Text>
            <Text style={styles.timestamp}>{item.timestamp.toLocaleString('pt-BR')}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.messageText} numberOfLines={1} ellipsizeMode="tail">{item.content}</Text>
            {item.unread ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCountText}>{item.unread}</Text>
                </View>
            ): (
                <></>
            )}
            
            </View>
            
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 10,
    },
    messageContent: {
      flex: 1,
    },
    messageHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    senderName: {
      fontWeight: 'bold',
    },
    unreadBadge: {
      backgroundColor: 'red',
      borderRadius: 50,
      height: 20,
      width: 20,
      textAlign: 'center',
      alignItems: 'center',
    },
    unreadCountText: {
      color: '#fff',
      fontSize: 12,
      marginTop: 1
    },
    timestamp: {
      fontSize: 12,
      color: '#999',
    },
    messageText: {
      marginTop: 5,
      maxWidth: 250
    },
  });

export default MessageList;
