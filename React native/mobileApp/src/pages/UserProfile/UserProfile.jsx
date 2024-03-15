import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Image,
  Text,
  Alert,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Userinfo from "./components/Userinfo";
import ListMenu from "./components/ListMenu";
const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
const UserProfile = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        {/* User image. name and button edit profile */}
        <View style={{ marginLeft: 15, marginRight: 15, marginTop: "20%" }}>
          <Userinfo />
        </View>
        {/* List of menu: Personal info, Privacy, Account, FeedBack & Support, About us */}
        <View style={{ marginLeft: 15, marginRight: 15, marginTop: "30%" }}>
          <ListMenu navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserProfile;
