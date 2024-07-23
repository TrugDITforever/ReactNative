import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { clearAllFields } from "../../Redux/postforfood";
const styles = StyleSheet.create({
  buttonBackandLike: {
    borderRadius: 50,
  },
  containIconBack: {
    // position: "absolute",
    right: 0,
  },
});
interface Prop {
  isShown?: boolean;
  navigation?: any;
}
const HeadervsButtonBack: React.FC<Prop> = ({ isShown, navigation }) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        elevation: 1,
        shadowColor: "#ccc",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 15,
          marginLeft: 15,
          marginRight: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearAllFields()), navigation.goBack();
            }}
          >
            <View>
              <AntDesign name="arrowleft" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        {/* {isShown && (
          <View>
            <TouchableOpacity style={styles.buttonBackandLike}>
              <View>
                <Entypo name={"dots-three-horizontal"} size={22} />
              </View>
            </TouchableOpacity>
          </View>
        )} */}
      </View>
    </View>
  );
};
export default HeadervsButtonBack;
