import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Userinfo from "../Userinfo";

const PageDetails = () => {
  const user = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: "10%" }}>
        <Userinfo />
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.inputheader}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={user.name}
          onChangeText={setName}
        />
        <Text style={styles.inputheader}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={user.username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputheader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          placeholder="Edit your description here..."
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  formcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  inputheader: {
    paddingLeft: 5,
    width: "100%",
    fontSize: 14,
    opacity: 0.5,
    fontFamily: "Nunito-Regular",
  },
  input: {
    fontFamily: "Nunito-semiBold",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  textSubmit: {
    color: "#fff",
    fontFamily: "Nunito-semiBold",
    fontSize: 18,
    padding: 15,
  },
  textInput: {
    backgroundColor: "#f6f6f6",
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    width: "100%",
    height: 130,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    marginTop: "20%",
  },
});

export default PageDetails;
