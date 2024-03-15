import React, { useState, useRef, useCallback } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { updateUser } from "../../../Redux/user";
import axios from "axios";
const styles = StyleSheet.create({
  errormesss: {
    color: "red",
  },
  invalidacc: {
    color: "red",
    fontSize: 18,
  },
});
const SinginForm = ({ navigation, navigateToSignup, dispatch }) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setShow] = useState(true);
  const [emailerr, setemailerr] = useState(false);
  const [passerr, setpasserr] = useState(false);
  const [accounterr, setaccerr] = useState(false);
  //start function
  const changeEmail = (text) => {
    setemail(text);
  };
  const chagePass = (passs) => {
    setpassword(passs);
  };
  const SubmitSignin = useCallback(async () => {
    if (email && password) {
      setemailerr(false);
      setpasserr(false);
      var value = {
        email: email,
        password: password,
      };
      try {
        const res = await axios.post(
          "http://192.168.200.197:8080/v1/checkuser",
          value
        );
        if (res.data.success) {
          navigation.navigate("Details");
          const valueres = {
            name: res.data.dataUser[0].username,
            email: res.data.dataUser[0].email,
            password: res.data.dataUser[0].password,
          };
          dispatch(updateUser(valueres));
          setaccerr(false);
        } else {
          setaccerr(true);
        }
      } catch (error) {
        console.error("AxiosError:", error.message);
      }
    } else {
      setemailerr(!emailerr);
      setpasserr(!passerr);
    }
  }, [email, password, navigation, emailerr, passerr]);
  return (
    <View
      style={{
        height: "90%",
        marginTop: 90,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      {/* Gmail */}
      <View style={{ position: "relative" }}>
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Gmail:
        </Text>
        {emailerr && (
          <Text style={styles.errormesss}>* Email cannot be empty</Text>
        )}
        <TextInput
          style={{
            height: 30,
            borderBottomWidth: 1,
            marginBottom: 20,
            borderBottomColor: "#ccc",
          }}
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
        <Text style={{ fontSize: 20, fontWeight: 500, color: "red" }}>
          Password:
        </Text>
        {passerr && (
          <Text style={styles.errormesss}>* Password cannot be empty</Text>
        )}
        <TextInput
          style={{
            height: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
          placeholder="Enter your password"
          onChangeText={chagePass}
          value={password}
          secureTextEntry={show ? true : false}
        />
        <Text style={{ position: "absolute", right: 0, top: 30 }}>
          {show ? (
            <Ionicons
              name={"eye-off"}
              size={18}
              onPress={() => {
                setShow(!show);
              }}
            />
          ) : (
            <Ionicons
              name={"eye"}
              size={18}
              onPress={() => {
                setShow(!show);
              }}
            />
          )}
        </Text>
      </View>
      {/* Forgot pass */}
      <View
        style={{
          marginTop: 30,
          position: " relative",
          width: "100%",
          height: 20,
        }}
      >
        <Text style={{ fontSize: 18, position: "absolute", right: 0 }}>
          Forgot password?
        </Text>
      </View>
      {/* Message invalid account */}
      <View style={{ marginTop: 10 }}>
        {accounterr && (
          <Text style={styles.invalidacc}>
            {" "}
            <Ionicons name={"warning-outline"} color={"red"} size={18} />
            Something went wrong. Please try again
          </Text>
        )}
      </View>
      {/* Button submit */}
      <View style={{ display: "flex", alignItems: "center", marginTop: 80 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 60,
          }}
          onPress={() => SubmitSignin()}
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
          >
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: 500 }}>
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
            fontWeight: 800,
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
