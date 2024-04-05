import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (fourth value) as needed
  },
  textIntro: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Nunito-semiBold",
    marginHorizontal: 15,
    padding: 10,
    textAlign: "center",
  },
  textgetstart: {
    fontSize: 25,
    fontFamily: "Nunito-semiBold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#F98A4F",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
interface Prop {
  navigation: any;
}
const Intropage: React.FC<Prop> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground
        style={styles.container}
        source={require("../../assets/image/cookloading.png")}
      >
        <View style={styles.overlay} />
        <View
          style={{ position: "absolute", bottom: 50, alignItems: "center" }}
        >
          <Text style={styles.textIntro}>
            Welcome to CookMate, your culinary companion for delicious recipes
            and kitchen inspiration! Explore a variety of recipes, cooking tips,
            and tutorials to elevate your cooking game. CookMate has everything
            you need to create mouthwatering dishes with ease. Let's get
            cooking!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Text style={styles.textgetstart}>Get's started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Intropage;
