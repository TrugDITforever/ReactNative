import React, { useState } from "react";
import axios from "axios";
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
import UserContainer from "./components/User/UserContainer";
import CardRecommend from "./components/Card/CardRecommend";
import CardCollections from "./components/Card/CardCollection";
import CardRecipes from "./components/Card/CardRecipes";
import CardPopular from "./components/Card/CardPopular";
import CardDay from "./components/Card/CardDays";
import CardLoading from "./components/Card/CardLoading";
import Statusbar from "../../components/Statusbar/Statusbar";
import { useFetchFoodData } from "../../features/authentication/hooks/useFetchFoodData";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
interface Props {
  navigation: any;
}
const HomePage: React.FC<Props> = ({ navigation }) => {
  const { foodData, isloading } = useFetchFoodData();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View>
        {/*container for profile */}
        <UserContainer navigation={navigation} />
        {/* Place for cardBox */}
        {isloading ? (
          <CardLoading />
        ) : (
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
              <CardRecommend
                navigation={navigation}
                foodData={foodData}
                dispatch={dispatch}
              />
              <CardRecipes
                navigation={navigation}
                foodData={foodData}
                dispatch={dispatch}
              />
              <CardPopular
                navigation={navigation}
                foodData={foodData}
                dispatch={dispatch}
              />
              <CardCollections
                navigation={navigation}
                foodData={foodData}
                dispatch={dispatch}
              />
              <CardDay
                dispatch={dispatch}
                Time={"Highly rated"}
                navigation={navigation}
                foodData={foodData}
              />
              <CardDay
                dispatch={dispatch}
                Time={"Breakfast"}
                navigation={navigation}
                foodData={foodData}
              />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
{
  /* <CardDay
              Time={"Lunch"}
              images={images.lunch}
              navigation={navigation}
            />
            <CardDay
              Time={"Dinner"}
              images={images.breakfast}
              navigation={navigation}
            /> */
}
