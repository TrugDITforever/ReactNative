import * as React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SigninForm from "./FormSignin";
import SignupForm from "./FormSignup";
import { isfirstTimeLogin } from "../../features/authentication/auth/checkIsfirstTimeLogin";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  navigation: any;
}
const AccountPage: React.FC<Props> = ({ navigation }) => {
  const [showSignin, setShowSignin] = React.useState<boolean>(true);
  const [ischeck, setischeck] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const navigateToSignup = () => {
    setShowSignin(false);
  };
  const navigateToSignin = () => {
    setShowSignin(true);
  };
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
      <LinearGradient
        colors={["#F98A4F", "#FCA64F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View
          style={{
            height: "25%",
            width: "100%",
          }}
        >
          {showSignin ? (
            <View style={styles.textHeader}>
              <Text style={styles.titleText}>Hello</Text>
              <Text style={styles.titleText}>Welcome back!</Text>
            </View>
          ) : (
            <View style={styles.textHeader}>
              <Text
                style={styles.titleText}
                onPress={() => navigation.navigate("Intro")}
              >
                Create Your Account!
              </Text>
            </View>
          )}
        </View>
        {/* View for Form Sign in and Sign up */}
        <View style={styles.containForm}>
          {/* Form signup and login */}
          {showSignin ? (
            <SigninForm
              navigation={navigation}
              navigateToSignup={navigateToSignup}
              dispatch={dispatch}
            />
          ) : (
            <SignupForm
              navigation={navigation}
              navigateToSignin={navigateToSignin}
              dispatch={dispatch}
            />
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default AccountPage;
const styles = StyleSheet.create({
  container: {
    with: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 36,
    fontFamily: "Nunito-Bold",
    color: "#fff",
  },
  containForm: {
    height: "80%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#fff",
  },
  textHeader: {
    height: "100%",
    justifyContent: "center",
    marginLeft: 20,
  },
});
