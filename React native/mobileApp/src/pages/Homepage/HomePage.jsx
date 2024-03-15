import React, { useState } from "react";

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
import UserContainer from "./components/User/UserContainer";
import CardRecommend from "../../components/Card/CardRecommend";
import CardCollections from "../../components/Card/CardCollection";
import CardRecipes from "../../components/Card/CardRecipes";
import CardPopular from "../../components/Card/CardPopular";
import CardDay from "../../components/Card/CardDays";

const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ECECEC",
    backgroundColor: "#ffff",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
const HomePage = ({ navigation }) => {
  const userinfo = useSelector((state) => state.userinfo);
  const images = {
    breakfast: require("../../assets/image/food.jpg"),
    lunch: require("../../assets/image/lunch.jpg"),
  };
  const [onload, setonload] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View>
        <View
          style={{
            width: "100%",
            height: "8.2%",
            backgroundColor: "#fff",
            elevation: 2,
            shadowColor: "#000",
          }}
        >
          {/*container for profile */}
          <UserContainer navigation={navigation} />
        </View>
        {/* Place for cardBox */}
        <View style={{ width: "100%", height: "92%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Nunito-Bold",
                margin: 10,
                color: "orange",
              }}
            >
              What do you want to cook today?
            </Text>
            <CardRecommend navigation={navigation} />
            <CardRecipes navigation={navigation} />
            <CardPopular navigation={navigation} />
            <CardCollections navigation={navigation} />
            <CardDay
              Time={"Highly rated"}
              images={images.breakfast}
              navigation={navigation}
            />
            <CardDay
              Time={"Breakfast"}
              images={images.breakfast}
              navigation={navigation}
            />
            <CardDay
              Time={"Lunch"}
              images={images.lunch}
              navigation={navigation}
            />
            <CardDay
              Time={"Dinner"}
              images={images.breakfast}
              navigation={navigation}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
