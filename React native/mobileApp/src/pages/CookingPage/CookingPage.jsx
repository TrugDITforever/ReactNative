import * as React from "react";
import { Image, Text, View } from "react-native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import FoodimgName from "./components/FoodimgName";
import ListofDecrip from "./components/ListofDecrip";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
// import for component
import Description from "./components/Decription";
import Ingredients from "./components/Ingredients";
import Proceduce from "./components/Proceduce";
import CardForMore from "./components/CardFormore";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
const CookingPage = ({ navigation }) => {
  const [loading, setloading] = React.useState(true);
  const setloadingwhenfetch = React.useCallback(() => {
    setloading(false);
    setTimeout(() => {
      setloading(true);
    }, 2000);
  }, [loading]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {/* goback button and like button*/}
      <HeadervsButtonBack isShown={true} navigation={navigation} />
      {/* Details of food */}
      <View style={{ height: "93%" }}>
        {loading ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={!loading}
                onRefresh={setloadingwhenfetch}
              />
            }
          >
            {/* some info here: country,.... */}
            <View
              style={{
                width: " 100%",
                height: 30,
                flexDirection: "row",
                margin: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#f8f8f8",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingLeft: 5,
                  paddingRight: 10,
                  elevation: 2,
                  shadowColor: "#000",
                }}
              >
                <Ionicons name="earth" size={18} />
                <Text
                  style={{
                    paddingLeft: 5,
                    fontFamily: "Nunito-Medium",
                    fontSize: 16,
                  }}
                >
                  {""}Japan
                </Text>
              </View>
            </View>
            {/*  */}
            <FoodimgName />
            {/* Stars */}
            <View>
              <Text style={{ letterSpacing: 5 }}>
                {" "}
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"staro"} color={"orange"} size={16} />
              </Text>
            </View>
            {/* Calories, time, level, serves */}
            <View style={{ flexDirection: "row" }}>
              <ListofDecrip nameIcon={"flame-outline"} text={"150 kcal"} />
              <ListofDecrip nameIcon={"timer-outline"} text={"50 mins"} />
              <ListofDecrip nameIcon={"flash-outline"} text={"Eazy"} />
              <ListofDecrip nameIcon={"git-branch-outline"} text={"Serves 4"} />
            </View>
            {/* Description, Ingredients, Proceduce  */}
            <Description />
            <Ingredients />
            <Proceduce />
            <CardForMore
              navigation={navigation}
              setloadingwhenfetch={setloadingwhenfetch}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator size={"large"} color={"#000"} />
        )}
      </View>
    </SafeAreaView>
  );
};
export default CookingPage;
