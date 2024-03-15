import React, { useState, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { LinearGradient } from "expo-linear-gradient";
const SignupForm = ({ navigation, navigateToSignin }) => {
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
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Full Name:
        </Text>
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
      {/* Gmail */}
      <View style={{ position: "relative" }}>
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Gmail:
        </Text>
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
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Password:
        </Text>
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
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Confirm password:
        </Text>
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
          style={{
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 60,
          }}
          onPress={() => navigation.navigate("Details")}
        >
          <LinearGradient
            colors={["#D10030", "#4B1832"]}
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
            onPress={() => navigation.navigate("Details")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: 500,
              }}
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
              fontWeight: 800,
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
