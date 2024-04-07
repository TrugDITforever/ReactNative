import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { SubmitSignIn } from "../../features/authentication/submitSignin";
interface PropsForLogin {
  navigation: any;
  dispatch: any;
  navigateToSignup: () => void;
}
const SinginForm: React.FC<PropsForLogin> = ({
  navigateToSignup,
  dispatch,
  navigation,
}) => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [emailerr, setemailerr] = useState<boolean>(false);
  const [passerr, setpasserr] = useState<boolean>(false);
  const [accounterr, setaccerr] = useState<boolean>(false);
  //start function
  const changeEmail = (text: string) => {
    setemail(text);
  };
  const chagePass = (passs: string) => {
    setpassword(passs);
  };
  /// function login
  const handleSubmit = () => {
    SubmitSignIn(
      email,
      password,
      setemailerr,
      setpasserr,
      navigation,
      dispatch,
      setaccerr
    );
  };
  return (
    <View style={styles.container}>
      {/* Gmail */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>E-mail:</Text>
        {emailerr && (
          <Text style={styles.errormesss}>* Email cannot be empty</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter your gmail"
          onChangeText={changeEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <Ionicons name={"checkmark-sharp"} size={18} />
        </Text>
      </View>
      {/* Password */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>Password:</Text>
        {passerr && (
          <Text style={styles.errormesss}>* Password cannot be empty</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={chagePass}
          value={password}
          secureTextEntry={show ? true : false}
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <Ionicons
            name={show ? "eye" : "eye-off"}
            size={18}
            onPress={() => {
              setShow(!show);
            }}
          />
        </Text>
      </View>
      {/* Forgot pass */}
      <View
        style={{
          marginTop: 30,
          position: "relative",
          width: "100%",
          height: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            position: "absolute",
            right: 0,
            color: "#F98A4F",
          }}
        >
          Forgot password?
        </Text>
      </View>
      {/* Message invalid account */}
      <View style={{ marginTop: 10 }}>
        {accounterr && (
          <Text style={styles.invalidacc}>
            *Wrong email or password. Please try again!
          </Text>
        )}
      </View>
      {/* Button submit */}
      <View style={{ display: "flex", alignItems: "center", marginTop: 80 }}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <LinearGradient
            colors={["#F98A4F", "#FCA64F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearbutton}
          >
            <Text
              style={{ color: "#fff", fontFamily: "Nunito-Bold", fontSize: 30 }}
            >
              SIGN IN
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* Button change to sign up form */}
      <View
        style={{
          marginTop: 80,
          width: "100%",
          position: "relative",
          height: "10%",
        }}
      >
        <Text
          style={{
            position: "absolute",
            right: 0,
            fontSize: 16,
            color: "#8F9090",
            fontFamily: "Nunito-semiBold",
          }}
        >
          Don't have account?
        </Text>
        <Text
          style={{
            fontSize: 20,
            position: "absolute",
            right: 0,
            bottom: 0,
            fontFamily: "Nunito-Bold",
          }}
          onPress={navigateToSignup}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};
export default SinginForm;
const styles = StyleSheet.create({
  container: {
    height: "90%",
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
  },
  errormesss: {
    color: "red",
  },
  invalidacc: {
    color: "red",
    fontSize: 18,
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 20,
    fontFamily: "Nunito-Medium",
    color: "#F98A4F",
  },
  button: {
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
  linearbutton: {
    backgroundColor: "#6807e3",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
});
