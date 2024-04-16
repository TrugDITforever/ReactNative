import * as React from "react";
import { Image, Text, View } from "react-native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import FoodimgName from "./components/FoodimgName";
import { ListofDecrip, ListofOwnerAndCountry } from "./components/ListofDecrip";
import AntDesign from "react-native-vector-icons/AntDesign";
// import for component
import Description from "./components/Decription";
import Ingredients from "./components/Ingredients";
import Proceduce from "./components/Proceduce";
import CardForMore from "./components/CardFormore";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
interface Prop {
  navigation: any;
}
const CookingPage: React.FC<Prop> = ({ navigation }) => {
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
            // refreshControl={
            //   <RefreshControl
            //     refreshing={!loading}
            //     onRefresh={setloadingwhenfetch}
            //   />
            // }
          >
            {/* some info here: country,.... */}
            <ListofOwnerAndCountry />
            {/*  */}
            <View>
              <FoodimgName />
              {/* Stars */}
              <View style={{ marginLeft: 15 }}>
                <Text style={{ letterSpacing: 5 }}>
                  <AntDesign name={"star"} color={"orange"} size={16} />
                  <AntDesign name={"star"} color={"orange"} size={16} />
                  <AntDesign name={"star"} color={"orange"} size={16} />
                  <AntDesign name={"star"} color={"orange"} size={16} />
                  <AntDesign name={"staro"} color={"orange"} size={16} />
                </Text>
              </View>
              {/* Calories, time, level, serves */}
              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <ListofDecrip nameIcon={"flame-outline"} text={"150 kcal"} />
                <ListofDecrip nameIcon={"timer-outline"} text={"50 mins"} />
                <ListofDecrip nameIcon={"flash-outline"} text={"Eazy"} />
                <ListofDecrip
                  nameIcon={"git-branch-outline"}
                  text={"Serves 4"}
                />
              </View>
              {/* Description, Ingredients, Proceduce  */}
              <Description />
              <Ingredients />
              <Proceduce />
              <CardForMore
                navigation={navigation}
                setloadingwhenfetch={setloadingwhenfetch}
              />
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator size={"large"} color={"#000"} />
        )}
      </View>
    </SafeAreaView>
  );
};
export default CookingPage;
