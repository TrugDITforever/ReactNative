import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import Userinfo from "./components/Userinfo";
import ListMenu from "../SettingPage/components/ListMenu";
import Statusbar from "../../components/Statusbar/Statusbar";
import { HamburgerNav } from "./components/HamburgreNav/HamburgerNav";
import PostCard from "./components/PostCard";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
interface Prop {
  navigation: any;
}
const UserProfile: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* User image. name and button edit profile */}
        <View style={{ marginLeft: 15, marginRight: 15, height: "40%" }}>
          <HamburgerNav navigation={navigation} />
          <Userinfo />
        </View>
        {/* Post of User will be showed here */}
        <View style={{ width: "100%", height: "60%" }}>
          <PostCard navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserProfile;
