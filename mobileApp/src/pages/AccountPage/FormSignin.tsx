import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [emailerr, setEmailErr] = useState<boolean>(false);
  const [passerr, setPassErr] = useState<boolean>(false);
  const [accounterr, setAccErr] = useState<boolean>(false);

  const changeEmail = (text: string) => setEmail(text);
  const changePass = (pass: string) => setPassword(pass);

  const handleSubmit = () => {
    SubmitSignIn(
      email,
      password,
      setEmailErr,
      setPassErr,
      navigation,
      dispatch,
      setAccErr
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail:</Text>
          {emailerr && (
            <Text style={styles.errorMsg}>* Email cannot be empty</Text>
          )}
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          {passerr && (
            <Text style={styles.errorMsg}>* Password cannot be empty</Text>
          )}
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, [accounterr ? styles.errborderInput : {}]]}
              placeholder="Enter your password"
              placeholderTextColor="white"
              onChangeText={changePass}
              value={password}
              secureTextEntry={show ? true : false}
            />
            <TouchableOpacity
              onPress={() => setShow(!show)}
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
        {accounterr && (
          <Text style={styles.invalidAccMsg}>*Invalid email or password!</Text>
        )}
        <View style={styles.forgotPassContainer}>
          <Text style={styles.forgotPassText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <LinearGradient
            colors={["#F98A4F", "#FCA64F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearButton}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/image/icongoogle.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <Text style={styles.signUpLink} onPress={navigateToSignup}>
            Sign up
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 90,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: "Nunito-Medium",
    color: "#F98A4F",
    paddingBottom: 5,
  },
  errorMsg: {
    color: "red",
  },
  passwordContainer: {
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
    color: "#fff",
  },
  forgotPassContainer: {
    width: "100%",
    marginTop: 10,
  },
  forgotPassText: {
    fontSize: 18,
    fontFamily: "Nunito-Medium",
    color: "#F98A4F",
    textAlign: "right",
  },
  invalidAccMsg: {
    color: "red",
    fontSize: 16,
    fontFamily: "Nunito-Regular",
  },
  button: {
    width: "100%",
    marginTop: 50,
  },
  linearButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 30,
  },
  orText: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginTop: 30,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    fontSize: 16,
    color: "#8F9090",
    fontFamily: "Nunito-semiBold",
  },
  signUpLink: {
    fontSize: 18,
    color: "#F98A4F",
    fontFamily: "Nunito-Bold",
    marginLeft: 5,
  },
});

export default SinginForm;
