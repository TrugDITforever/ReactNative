import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PageAbout from "./PageAbout";
import PageFeedBack from "./PageFeedBack";
const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonBackandLike: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
  },
});
const PageSubMenu = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back */}
        <View
          style={{
            width: "100%",
            height: "7%",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View style={{ flexDirection: "row", margin: 10 }}>
            <View style={{ width: "90%" }}>
              <TouchableOpacity
                style={styles.buttonBackandLike}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Page About : incude About, Terms of Use */}
        {/* <PageAbout /> */}
        {/* Form FeedBack */}
        <PageFeedBack />
      </View>
    </SafeAreaView>
  );
};
export default PageSubMenu;
