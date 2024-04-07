import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { LinearGradient } from "expo-linear-gradient";

interface Prop {
  navigation: any;
  navigateToSignin: any;
}
const styles = StyleSheet.create({
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
const SignupForm: React.FC<Prop> = ({ navigation, navigateToSignin }) => {
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        height: "65%",
        marginTop: 70,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      {/* FullName */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <FontAwesomeIcon icon={faCheck} />
        </Text>
      </View>
      {/* Gmail */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>Gmail:</Text>
        <TextInput
          style={{
            height: 30,
            borderBottomWidth: 1,
            marginBottom: 20,
            borderBottomColor: "#ccc",
          }}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <FontAwesomeIcon icon={faCheck} />
        </Text>
      </View>
      {/* Password */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={{
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          }}
          secureTextEntry={show ? true : false}
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <FontAwesomeIcon icon={faEyeSlash} />
        </Text>
      </View>
      {/*Confirm Password */}
      <View style={{ position: "relative" }}>
        <Text style={styles.label}>Confirm password:</Text>
        <TextInput
          style={{
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          secureTextEntry={show ? true : false}
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          <FontAwesomeIcon icon={faEyeSlash} />
        </Text>
      </View>
      {/* Button submit */}
      <View
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Details")}
        >
          <LinearGradient
            colors={["#F98A4F", "#FCA64F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              backgroundColor: "#6807e3",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 60,
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "Nunito-Bold", fontSize: 30 }}
            >
              SIGN UP
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Button change to sign in form */}
        <View
          style={{
            marginTop: 30,
            width: "100%",
            position: "relative",
            height: "25%",
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
            Already have account?
          </Text>
          <Text
            style={{
              fontSize: 20,
              position: "absolute",
              right: 0,
              bottom: 0,
              fontFamily: "Nunito-Bold",
            }}
            onPress={navigateToSignin}
          >
            Sign in
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignupForm;
