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
import PageDetails from "./PersonalDetailsPage";
import HeadervsButtonBack from "../../../../components/Header/HeadervsButtonBack";
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
interface Prop {
  navigation: any;
  route: any;
}
const PageSubMenu: React.FC<Prop> = ({ navigation, route }) => {
  const [onload, setonload] = useState(false);
  const { index } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back */}
        <HeadervsButtonBack isShown={false} navigation={navigation} />
        {index === 2 ? (
          <PageAbout />
        ) : index === 3 ? (
          <PageFeedBack route={route} />
        ) : index === 0 ? (
          <PageDetails />
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
};
export default PageSubMenu;
