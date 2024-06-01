import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import UserContainer from "./components/User/UserContainer";
import CardRecommend from "./components/Card/CardRecommend";
import CardCollections from "./components/Card/CardCollection";
import CardRecipes from "./components/Card/CardRecipes";
import CardPopular from "./components/Card/CardPopular";
import CardDay from "./components/Card/CardDays";
import CardLoading from "./components/Card/CardLoading";
import Statusbar from "../../components/Statusbar/Statusbar";
import { useFetchFoodData } from "../../features/authentication/hooks/useFetchFoodData";
import CardExploreMore from "./components/Card/CardExploreMore";
import CardCourse from "./components/Card/CardCourse";
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
  const recommended = "recommended";
  const { foodData, isloading } = useFetchFoodData(recommended);
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
          <View style={{ width: "100%", height: "93%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ margin: 15, marginBottom: 5 }}>
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "Nunito-Bold",
                      color: "#F98A4F",
                    }}
                  >
                    What do you want
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Nunito-Bold",
                    color: "#F98A4F",
                  }}
                >
                  to cook today?
                </Text>
              </View>
              <CardRecommend navigation={navigation} dispatch={dispatch} />
              <CardRecipes navigation={navigation} dispatch={dispatch} />
              <CardCollections navigation={navigation} dispatch={dispatch} />
              <CardPopular navigation={navigation} dispatch={dispatch} />
              <CardDay
                dispatch={dispatch}
                Time={"Highly rated"}
                navigation={navigation}
              />
              <CardCourse navigation={navigation} />
              <CardExploreMore navigation={navigation} dispatch={dispatch} />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
