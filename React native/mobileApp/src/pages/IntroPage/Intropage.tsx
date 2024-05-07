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
import { isfirstTimeLogin } from "../../features/authentication/auth/checkIsfirstTimeLogin";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
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
    fontSize: 24,
    fontFamily: "Nunito-semiBold",
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#F98A4F",
    borderRadius: 10,
    marginTop: 30,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
interface Prop {
  navigation: any;
}
const Intropage: React.FC<Prop> = ({ navigation }) => {
  React.useEffect(() => {
    const check = async () => {
      const isLogged = await isfirstTimeLogin();
      if (isLogged) {
        navigation.replace("Details");
      }
    };
    check();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground
        style={styles.subcontainer}
        source={require("../../assets/image/cookloading.png")}
      >
        <View style={styles.overlay} />
        <View
          style={{
            position: "absolute",
            bottom: 50,
            alignItems: "center",
            padding: 20,
          }}
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
