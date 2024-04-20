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
  },
  userinfoContainer: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    marginTop: "10%",
    alignItems: "center",
  },
  imageContainer: {
    width: 110,
    height: 110,
  },
  image: {
    width: "100%",
    height: "100%",
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
            source={{
              uri: userinfo.userimage,
            }}
          ></Image>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textName}>{userinfo.username}</Text>
          <Text style={styles.description}>{userinfo.description}</Text>
        </View>
      </View>
    </View>
  );
};
export default Userinfo;