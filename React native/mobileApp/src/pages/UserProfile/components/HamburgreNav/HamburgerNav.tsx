import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Prop {
  navigation: any;
}
export const HamburgerNav: React.FC<Prop> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonAdd}
          // onPress={() => navigation.navigate("Settings")}
        >
          <Feather name={"plus-square"} size={27} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonhambur}
          onPress={() => navigation.navigate("Settings")}
        >
          <Feather name="menu" size={30} />
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonhambur: {
    paddingLeft: 10,
  },
  buttonAdd: {},
});