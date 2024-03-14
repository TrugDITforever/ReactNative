import * as React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  userinfoContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "#f6f6f6",
    elevation: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: -50,
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 60,
  },
  textName: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    padding: 5,
  },
  description: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    paddingBottom: 5,
  },
});
const Userinfo = () => {
  const userinfo = useSelector((state) => state.userinfo);
  return (
    <View style={styles.container}>
      <View style={styles.userinfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../assets/image/porkrice.jpg")}
          ></Image>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textName}>{userinfo.name}</Text>
          <Text style={styles.description}>{userinfo.decription}</Text>
        </View>
      </View>
    </View>
  );
};
export default Userinfo;
