import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

interface Prop {
  userProfile: string;
  username: string;
}

const User: React.FC<Prop> = ({ userProfile, username }) => {
  return (
    <View style={styles.imageViewContainer}>
      <View style={{ width: 40, height: 40 }}>
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
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#fff",
  },
});
