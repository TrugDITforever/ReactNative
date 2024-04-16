import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const styles = StyleSheet.create({
  buttonBackandLike: {
    borderRadius: 50,
  },
  containIconBack: {
    position: "absolute",
    right: 0,
  },
});
interface Prop {
  isShown: boolean;
  navigation?: any;
}
const HeadervsButtonBack: React.FC<Prop> = ({ isShown, navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
        <View style={{}}>
          <TouchableOpacity
            style={styles.buttonBackandLike}
            onPress={() => navigation.goBack()}
          >
            <View>
              <AntDesign name="arrowleft" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        {isShown && (
          <View style={styles.containIconBack}>
            <TouchableOpacity style={styles.buttonBackandLike}>
              <View style={{ padding: 10 }}>
                <Ionicons name={"heart-outline"} size={24} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default HeadervsButtonBack;
