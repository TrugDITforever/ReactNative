import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  buttonBackandLike: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
  },
});
interface Prop {
  isShown: boolean;
  navigation: any;
}
const HeadervsButtonBack: React.FC<Prop> = ({ isShown, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "7%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", margin: 10 }}>
        <View style={{ width: "90%" }}>
          <TouchableOpacity
            style={styles.buttonBackandLike}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        {isShown && (
          <TouchableOpacity style={styles.buttonBackandLike}>
            <Ionicons name={"heart-outline"} size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default HeadervsButtonBack;
