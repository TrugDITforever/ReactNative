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
  TouchableOpacity,
} from "react-native";
import FavorList from "./components/FavorList";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchInput from "./components/SearchInput";
import Statusbar from "../../components/Statusbar/Statusbar";

const Separator = () => <View style={styles.separator} />;
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
interface Prop {
  navigation: any;
}
const FavoritePage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ width: "100%", height: "auto", marginTop: 10 }}>
          {/* for form search in collection */}
          <SearchInput />
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              margin: 15,
            }}
          >
            <Text style={{ fontFamily: "Nunito-Bold", fontSize: 24 }}>
              Collections
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
export default FavoritePage;
