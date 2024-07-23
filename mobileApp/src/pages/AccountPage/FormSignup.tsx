import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SubmitSignUp } from "../../features/authentication/submitSignUp";

interface Prop {
  navigation: any;
  navigateToSignin: any;
  dispatch: any;
}

const SignupForm: React.FC<Prop> = ({
  navigation,
  navigateToSignin,
  dispatch,
}) => {
  const [name, setfullname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirm, setconfirm] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [emailerr, setemailerr] = useState<boolean>(false);
  const [passerr, setpasserr] = useState<boolean>(false);
  const [fullnameerr, setfullnameErr] = useState<boolean>(false);
  const [accounterr, setaccerr] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState<string>("");
  //start function
  const changeFullname = (text: string) => {
    setaccerr(false);
    setfullname(text);
  };
  const changeEmail = (text: string) => {
    setemail(text);
    setaccerr(false);
  };
  const changepass = (text: string) => {
    setpassword(text);
    setaccerr(false);
  };
  const changeconfirm = (text: string) => {
    setconfirm(text);
    setaccerr(false);
  };

  const handlePress = () => {
    SubmitSignUp(
      name,
      email,
      password,
      navigation,
      setaccerr,
      setGeneralError,
      dispatch
    );
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{}}>
        <View style={{ position: "relative" }}>
          <Text style={styles.label}>Full name:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, [accounterr ? styles.errborderInput : {}]]}
              placeholder="Enter your name"
              placeholderTextColor="white"
              onChangeText={changeFullname}
              value={name}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>
        {/* Email */}
        <View style={{ position: "relative" }}>
          <Text style={styles.label}>E-mail:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, [accounterr ? styles.errborderInput : {}]]}
              placeholder="Enter your email"
              placeholderTextColor="white"
              onChangeText={changeEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>
        {/* Password */}
        <View style={{ position: "relative" }}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, [accounterr ? styles.errborderInput : {}]]}
              placeholder="Enter your password"
              placeholderTextColor="white"
              onChangeText={changepass}
              value={password}
              secureTextEntry={show ? true : false}
            />
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={show ? "eye" : "eye-off"}
                color={"#ccc"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* confirm password */}
        <View style={{ position: "relative" }}>
          <Text style={styles.label}>Confirm password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Confirm Password"
              placeholderTextColor="white"
              onChangeText={changeconfirm}
              value={confirm}
              secureTextEntry={show ? true : false}
            />
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={show ? "eye" : "eye-off"}
                color={"#ccc"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        {accounterr && <Text style={styles.errormesss}>*{generalError}</Text>}
        {/* Button submit */}

        <View>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <LinearGradient
              colors={["#F98A4F", "#FCA64F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearbutton}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Nunito-Bold",
                  fontSize: 30,
                }}
              >
                SIGN UP
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* Button change to sign up form */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "10%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#8F9090",
              fontFamily: "Nunito-semiBold",
            }}
          >
            Already have account?
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#F98A4F",
              fontFamily: "Nunito-Bold",
              paddingLeft: 5,
            }}
            onPress={navigateToSignin}
          >
            Login
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignupForm;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 60,
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
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    bottom: 22,
  },
  errborderInput: {
    borderColor: "red",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 10,
    color: "white",
  },
  label: {
    fontSize: 20,
    fontFamily: "Nunito-Medium",
    color: "#F98A4F",
    paddingBottom: 5,
  },
  button: {
    width: "100%",
    height: 60,
    marginTop: 20,
  },
  linearbutton: {
    backgroundColor: "#6807e3",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
});
