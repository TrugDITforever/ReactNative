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

interface Prop {
  navigation: any;
}
const FavoritePage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  const [showmodal, setshowmodal] = useState(false);
  const [donefetching, setdonefetching] = useState(false);
  const handleShowmodal = () => setshowmodal(true);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ width: "100%", height: "auto", marginTop: 10 }}>
          {/* for form search in collection */}
          {/* <SearchInput /> */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              margin: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                fontSize: 24,
                marginBottom: 15,
              }}
            >
              Collections
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onPress={handleShowmodal}
            >
              <Feather name="folder-plus" size={24} color={"#F98A4F"} />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  fontSize: 16,
                  color: "#F98A4F",
                  paddingLeft: 5,
                }}
              >
                New Collection
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          {/* List Favorite card */}
          {/* <FavorList navigation={navigation} /> */}
          <CollectionsList
            navigation={navigation}
            donefetching={donefetching}
            setdonefetching={setdonefetching}
          />
        </View>
        <ModalAddCollection
          visible={showmodal}
          onClose={setshowmodal}
          setdonefetching={setdonefetching}
        />
      </View>
    </SafeAreaView>
  );
};
export default FavoritePage;
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
