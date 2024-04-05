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
  containIconBack: {
    position: "absolute",
    right: 0,
  },
});
interface Prop {
  isShown: boolean;
  navigation: any;
}
const HeadervsButtonBack: React.FC<Prop> = ({ isShown, navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 15 }}>
        <View style={{}}>
          <TouchableOpacity
            style={styles.buttonBackandLike}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        {isShown && (
          <View style={styles.containIconBack}>
            <TouchableOpacity style={styles.buttonBackandLike}>
              <Ionicons name={"heart-outline"} size={24} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default HeadervsButtonBack;
