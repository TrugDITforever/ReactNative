import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

interface Prop {
  userProfile: string;
  username: string;
}

const User: React.FC<Prop> = ({ userProfile, username }) => {
  return (
    <View style={styles.imageViewContainer}>
      <View style={{ width: 45, height: 45 }}>
        <Image source={{ uri: userProfile }} style={styles.imageView} />
      </View>
      <Text
        style={{
          fontFamily: "Nunito-Medium",
          fontSize: 16,
          paddingLeft: 5,
        }}
      >
        {username}
      </Text>
    </View>
  );
};
export default User;
const styles = StyleSheet.create({
  imageViewContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  imageView: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
