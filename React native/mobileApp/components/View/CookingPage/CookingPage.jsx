import * as React from "react";
import { Image, Text, View } from "react-native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FoodimgName from "./components/FoodimgName";
import ListofDecrip from "./components/ListofDecrip";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
// import for component
import Description from "./components/Decription";
import Ingredients from "./components/Ingredients";
import Proceduce from "./components/Proceduce";
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
const CookingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {/* goback button and like button*/}
      <View
        style={{
          width: "100%",
          height: "7%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ width: "90%" }}>
            <TouchableOpacity
              style={styles.buttonBackandLike}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonBackandLike}>
            <Ionicons name={"heart-outline"} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Details of food */}
      <View style={{ height: "93%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* some info here: country,.... */}
          <View
            style={{
              width: " 100%",
              height: "3%",
              flexDirection: "row",
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#EFF0F0",
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
              <AntDesign name={"star"} color={"orange"} size={16} />
            </Text>
          </View>
          {/* Calories, time, level, serves */}
          <View style={{ flexDirection: "row" }}>
            <ListofDecrip nameIcon={"flame-sharp"} text={"150 kcal"} />
            <ListofDecrip nameIcon={"timer-outline"} text={"50 mins"} />
            <ListofDecrip nameIcon={"flash-outline"} text={"Eazy"} />
            <ListofDecrip nameIcon={"git-branch-outline"} text={"Serves 4"} />
          </View>
          {/* Description, Ingredients, Proceduce  */}
          <Description />
          <Ingredients />
          <Proceduce />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default CookingPage;
