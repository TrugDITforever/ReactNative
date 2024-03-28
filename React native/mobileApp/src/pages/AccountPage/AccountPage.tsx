import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SigninForm from "../../components/Form/FormSignin";
import SignupForm from "../../components/Form/FormSignup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const styles = StyleSheet.create({
  container: {
    with: "100%",
    height: "100%",
  },
});
interface Props {
  navigation: any;
}
const AccountPage: React.FC<Props> = ({ navigation }) => {
  const [user, getuser] = React.useState<any>([]);
  const [showSignin, setShowSignin] = React.useState<boolean>(true);
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const navigateToSignup = () => {
    setShowSignin(false);
  };

  const navigateToSignin = () => {
    setShowSignin(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#D10030", "#4B1832"]}
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
            <View
              style={{
                height: "100%",
                width: "40%",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text
                style={{ fontSize: 36, fontWeight: "500", color: "#fff" }}
                onPress={() => navigation.navigate("Intro")}
              >
                Hello Sign in!
              </Text>
            </View>
          ) : (
            <View
              style={{
                height: "100%",
                width: "47%",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 20,
              }}
            >
              <Text
                style={{ fontSize: 36, fontWeight: "500", color: "#fff" }}
                onPress={() => navigation.navigate("Intro")}
              >
                Create Your Account!
              </Text>
            </View>
          )}
        </View>
        {/* View for Form Sign in and Sign up */}
        <View
          style={{
            height: "80%",
            width: "100%",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "#fff",
          }}
        >
          {/* Form signup and login */}
          {showSignin ? (
            <SigninForm
              navigation={navigation}
              navigateToSignup={navigateToSignup}
              // userinfo={userinfo}
              dispatch={dispatch}
            />
          ) : (
            <SignupForm
              navigation={navigation}
              navigateToSignin={navigateToSignin}
            />
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default AccountPage;
