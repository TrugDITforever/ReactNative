import "react-native-gesture-handler";
import React from "react";
import HomePage from "../../pages/Homepage/HomePage";
import Intropage from "../../pages/IntroPage/Intropage";
import AccountPage from "../../pages/AccountPage";
import UserProfile from "../../pages/UserProfile/UserProfile";
import FavoritePage from "../../pages/FavoritePage/Collections";
import SearchPage from "../../pages/SearchingPage/SearchPage";
import AddPage from "../../pages/AddingPage";
// import for navigationP
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
// import for react-native icon
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// Start code navigation
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
interface Props {
  navigation: any;
}
export const AddPageStack: React.FC<Props> = ({ navigation }) => {
  return <></>;
};
export const TabScreen: React.FC<Props> = ({ navigation }) => {
  const listTapContent = [
    {
      name: "Home",
      component: HomePage,
      iconShow: (
        <Foundation name={"home"} size={28} color={styles.iconcolor.color} />
      ),
      tabText: "Home",
      iconhide: <Octicons name={"home"} size={24} color={"#000"} />,
    },
    {
      name: "Search",
      component: SearchPage,
      iconShow: (
        <Feather
          name={"search"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Search",
      iconhide: (
        <Feather name={"search"} size={styles.iconcolor.size} color={"#000"} />
      ),
    },
    {
      name: "Collections",
      component: FavoritePage,
      iconShow: (
        <AntDesign
          name={"heart"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Collect",
      iconhide: (
        <Feather name={"heart"} size={styles.iconcolor.size} color={"#000"} />
      ),
    },
    {
      name: "Profile",
      component: UserProfile,
      iconShow: (
        <Octicons
          name={"person-fill"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Profile",
      iconhide: (
        <Octicons name={"person"} size={styles.iconcolor.size} color={"#000"} />
      ),
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          elevation: 0,
        },
      }}
    >
      {listTapContent.map((value, i) => (
        <Tab.Screen
          key={i}
          name={value.name}
          component={value.component}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.navContain}>
                  {focused ? (
                    <View style={styles.navbarShow}>
                      <View style={styles.containiconandText}>
                        {value.iconShow}
                        {/* <Text style={styles.textnav}>{value.tabText}</Text> */}
                      </View>
                    </View>
                  ) : (
                    <View style={styles.navbarhide}>{value.iconhide}</View>
                  )}
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  navContain: {},
  navbarShow: {},
  navbarhide: {},
  textnav: {
    color: "#FE724C",
    fontSize: 14,
    fontFamily: "Nunito-semiBold",
  },
  iconcolor: {
    color: "#FE724C",
    size: 26,
  },
  containiconandText: {
    paddingBottom: 5,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#FE724C",
  },
});
