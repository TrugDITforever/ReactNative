import "react-native-gesture-handler";
import React from "react";
import HomePage from "../../pages/Homepage/HomePage";
import Intropage from "../../pages/IntroPage/Intropage";
import AccountPage from "../../pages/AccountPage";
import UserProfile from "../../pages/UserProfile/UserProfile";
import FavoritePage from "../../pages/FavoritePage/Collections";
import SearchPage from "../../pages/SearchingPage/SearchPage";
// import for navigationP
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
// import for react-native icon
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

// Start code navigation
const Tab = createBottomTabNavigator();
export const Drawer = createDrawerNavigator();
export const Drawermenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Menu" component={TabScreen} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  navContain: {
    marginRight: 5,
  },
  navbarShow: {
    borderRadius: 20,
  },
  navbarhide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
  textnav: {
    color: "#FE724C",
    fontSize: 14,
    fontFamily: "Nunito-semiBold",
  },
  iconcolor: {
    color: "#FE724C",
    size: 24,
  },
  containiconandText: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export const TabScreen: React.FC = () => {
  const listTapContent = [
    {
      name: "Home",
      component: HomePage,
      iconShow: (
        <Foundation
          name={"home"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Home",
      iconhide: (
        <Octicons name={"home"} size={styles.iconcolor.size} color={"#ccc"} />
      ),
    },
    {
      name: "Search",
      component: SearchPage,
      iconShow: (
        <Ionicons
          name={"search"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Search",
      iconhide: (
        <Ionicons name={"search"} size={styles.iconcolor.size} color={"#ccc"} />
      ),
    },
    {
      name: "Collections",
      component: FavoritePage,
      iconShow: (
        <MaterialCommunityIcons
          name={"heart-multiple"}
          size={styles.iconcolor.size}
          color={styles.iconcolor.color}
        />
      ),
      tabText: "Collect",
      iconhide: (
        <MaterialCommunityIcons
          name={"heart-multiple-outline"}
          size={styles.iconcolor.size}
          color={"#ccc"}
        />
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
        <Octicons name={"person"} size={styles.iconcolor.size} color={"#ccc"} />
      ),
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
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
                        <Text style={styles.textnav}>{value.tabText}</Text>
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
