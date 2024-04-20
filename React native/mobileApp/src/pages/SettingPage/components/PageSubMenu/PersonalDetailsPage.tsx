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
import Userinfo from "../../../UserProfile/components/Userinfo";

const PageDetails = () => {
  const user = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [descriptions, setdecription] = useState(user.description);
  const [profilePicture, setProfilePicture] = useState(null);
  const changeName = (text: string) => {
    setName(text);
  };
  const changeusername = (text: string) => {
    setUsername(text);
  };
  const changedescription = (text: string) => {
    setdecription(text);
  };
  const changeemail = (text: string) => {
    setEmail(text);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <Userinfo />
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.inputheader}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={changeName}
        />
        <Text style={styles.inputheader}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={changeusername}
        />
        <Text style={styles.inputheader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={changeemail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.textInput}
          value={descriptions}
          multiline={true}
          numberOfLines={4}
          placeholder="Edit your description here..."
          onChangeText={changedescription}
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
