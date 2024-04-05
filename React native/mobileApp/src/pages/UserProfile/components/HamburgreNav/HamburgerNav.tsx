import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
interface Prop {
  navigation: any;
}
export const HamburgerNav: React.FC<Prop> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Ionicons name="menu" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: "auto",
    position: "relative",
  },
  button: {
    position: "absolute",
    right: 0,
  },
});
