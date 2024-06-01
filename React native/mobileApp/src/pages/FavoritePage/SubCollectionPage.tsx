import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import FavorList from "./components/FavorList";
import Feather from "react-native-vector-icons/Feather";
import SearchInput from "./components/SearchInput";
import Statusbar from "../../components/Statusbar/Statusbar";
import CollectionsList from "./components/CollectionList";
import ModalAddCollection from "./components/Modal";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";

interface Prop {
  navigation: any;
}
const SubCollection: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  const [showmodal, setshowmodal] = useState(false);
  const [donefetching, setdonefetching] = useState(false);
  const handleShowmodal = () => setshowmodal(true);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        <HeadervsButtonBack navigation={navigation} />
        <View style={{ width: "100%", height: "auto" }}>
          {/* for form search in collection */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                fontSize: 24,
                marginBottom: 15,
              }}
            >
              All Saved Recipe
            </Text>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          {/* List Favorite card */}
          <FavorList navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SubCollection;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonmain: {
    width: 20,
    color: "rgba(255, 255, 255)",
  },
  logo: {
    width: 150,
    height: 180,
    objectFit: "contain",
  },
  text: {
    fontSize: 16,
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
