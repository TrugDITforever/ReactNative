import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Prop {
  navigation: any;
}
export const HamburgerNav: React.FC<Prop> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonhambur}
          onPress={() => navigation.navigate("CartPage")}
        >
          <AntDesign name="shoppingcart" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonhambur}
          onPress={() =>
            navigation.push("CreateRecipePage", { showupdate: false })
          }
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
    paddingLeft: 20,
  },
  buttonAdd: {},
});
