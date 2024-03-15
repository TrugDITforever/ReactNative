import "react-native-gesture-handler";
import React from "react";
import HomePage from "../../pages/Homepage/HomePage";
import Intropage from "../../pages/IntroPage/Intropage";
import AccountPage from "../../pages/AccountPage/AccountPage";
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
// const Drawer = createDrawerNavigator();
// export const Drawermenu = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Menu">
//       <Drawer.Screen name="Menu" component={TabScreen} />
//     </Drawer.Navigator>
//   );
// };
const styles = StyleSheet.create({
  navContain: {
    marginRight: 5,
  },
  navbarShow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    // backgroundColor: "#000",
  },
  navbarhide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
  textnav: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Nunito-semiBold",
  },
});

export const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.navContain}>
                {focused ? (
                  <View style={styles.navbarShow}>
                    <Octicons name={"home"} size={30} />
                    <Text style={styles.textnav}>Home</Text>
                  </View>
                ) : (
                  <View style={styles.navbarhide}>
                    <Octicons name={"home"} size={30} color={"#ccc"} />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.navContain}>
                {focused ? (
                  <View style={styles.navbarShow}>
                    <Ionicons
                      name={"search"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                    <Text style={styles.textnav}>Search</Text>
                  </View>
                ) : (
                  <View style={styles.navbarhide}>
                    <Ionicons
                      name={"search"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Collections"
        component={FavoritePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View style={styles.navbarShow}>
                    <MaterialCommunityIcons
                      name={"heart-multiple"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                    <Text style={styles.textnav}>Collections</Text>
                  </View>
                ) : (
                  <View style={styles.navbarhide}>
                    <MaterialCommunityIcons
                      name={"heart-multiple-outline"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View style={styles.navbarShow}>
                    <Octicons
                      name={"person-fill"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                    <Text style={styles.textnav}>Profile</Text>
                  </View>
                ) : (
                  <View style={styles.navbarhide}>
                    <Octicons
                      name={"person"}
                      size={30}
                      color={focused ? "#000" : "#ccc"}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View style={styles.navbarShow}>
                    <Ionicons
                      name={"settings-outline"}
                      size={30}
                      color={focused ? "#000" : "#9b9b9b"}
                    />
                    <Text style={styles.textnav}>Settings</Text>
                  </View>
                ) : (
                  <View style={styles.navbarhide}>
                    <Ionicons
                      name={"settings-outline"}
                      size={30}
                      color={focused ? "#000" : "#9b9b9b"}
                    />
                  </View>
                )}
              </View>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};
