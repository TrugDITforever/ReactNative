import React, { useState } from "react";
import UserContainer from "./components/User/UserContainer";
import CardOffer from "./components/Card/CardOffer";
import { useSelector, useDispatch } from "react-redux";
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
import { LinearGradient } from "expo-linear-gradient";
import CardCollections from "./components/Card/CardCollection";
import CardRecipes from "./components/Card/CardRecipes";
import CardPopular from "./components/Card/CardPopular";

const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
const HomePage = () => {
  const userinfo = useSelector((state) => state.userinfo);
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <View
        style={{
          marginTop: 15,
        }}
      >
        <View style={{ width: "100%", height: "8%" }}>
          {/* start container for profile */}
          <UserContainer />
        </View>
        {/* Place for cardBox */}
        <View style={{ width: "100%", height: "88.8%" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Nunito-semiBold",
              marginLeft: 10,
            }}
          >
            What would you like today ?
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardOffer />
            <CardRecipes />
            <CardPopular />
            <CardCollections />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
