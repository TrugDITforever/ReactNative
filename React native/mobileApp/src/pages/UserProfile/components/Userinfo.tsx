import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
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
    borderRadius: 10,
    marginTop: "15%",
    alignItems: "center",
  },
  imageContainer: {},
  image: {
    width: 110,
    height: 110,
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
  const userinfo = useSelector((state: any) => state.userinfo);
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
