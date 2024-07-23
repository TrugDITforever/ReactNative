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
import Statusbar from "../../components/Statusbar/Statusbar";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import ListMenu from "./components/ListMenu";
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
const SettingPage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        {/* header and title of page */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeadervsButtonBack isShown={false} navigation={navigation} />
          <Text style={{ fontFamily: "Nunito-Bold", fontSize: 20 }}>
            Settings and privacy
          </Text>
        </View>
        {/*  */}
        {/* All the components in setting page */}
        <View>
          <ListMenu navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SettingPage;
