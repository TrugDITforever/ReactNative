// src/screens/ChatScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import io from "socket.io-client";

// const socket = io("http://your-server-url"); // Thay 'http://your-server-url' bằng URL của server của bạn

const ChatScreen = ({ userId }) => {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("user", userId);

    socket.on("private_message", (message: any) => {
      setMessages((previousMessages: any) => [...previousMessages, message]);
    });

    return () => {
      socket.off("private_message");
    };
  }, []);

  const sendMessage = () => {
    const newMessage = { text: message, user: userId, createdAt: new Date() };
    socket.emit("private_message", {
      content: message,
      to: "recipient-user-id",
    }); // Thay 'recipient-user-id' bằng ID người nhận
    setMessages((previousMessages: any) => [...previousMessages, newMessage]);
    setMessage("");
  };

  const renderItem = ({ item }) => (
    <View style={item.user === userId ? styles.myMessage : styles.otherMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.createdAt.toString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tin nhắn..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sendButtonText: {
    color: "#007AFF",
    fontSize: 16,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    marginRight: 10,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F0F0",
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
    marginTop: 5,
  },
});

export default ChatScreen;
