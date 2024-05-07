import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import {
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Userinfo from "../../../UserProfile/components/Userinfo";
import { useSubmitupdateinfo } from "../../../../features/authentication/hooks/useUpdateInfo";
import ModalImage from "./modalImage";
const PageDetails = () => {
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(userinfo.name);
  const [email, setEmail] = useState(userinfo.email);
  const [username, setUsername] = useState(userinfo.username);
  const [description, setdecription] = useState(userinfo.description);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [ishow, setshowmodalimage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
  const handleupdateinfo = () => {
    setLoading(true);
    setTimeout(() => {
      useSubmitupdateinfo(
        userinfo.id,
        name,
        username,
        email,
        description,
        dispatch
      ).then(() => {
        setLoading(false),
          Toast.show({
            type: "success",
            text1: "Update success 👋",
          });
      });
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <Userinfo
          setshowmodalimage={setshowmodalimage}
          profilePicture={profilePicture}
        />
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
          value={description}
          multiline={true}
          numberOfLines={4}
          placeholder="Edit your description here..."
          onChangeText={changedescription}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleupdateinfo}
        >
          {loading ? (
            <ActivityIndicator size="large" color={"#fff"} />
          ) : (
            <Text style={styles.textSubmit}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
      <ModalImage
        ishow={ishow}
        setshowmodalimage={setshowmodalimage}
        setimage={setProfilePicture}
      />
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
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    marginTop: "20%",
  },
});

export default PageDetails;
