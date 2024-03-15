import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import Intropage from "../../pages/IntroPage/Intropage";
import AccountPage from "../../pages/AccountPage/AccountPage";
import SettingPage from "../../pages/SettingPage/SettingPage";
import CookingPage from "../../pages/CookingPage/CookingPage";
import PageViewall from "../../pages/PageViewall/components/PageViewall";
import PageSubMenu from "../../pages/UserProfile/components/PageSubMenu/index";
// import for navigationP
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabScreen } from "../Tabnavigate/screens";
// Start code navigation
const Stack = createNativeStackNavigator();
// loading custom font
const Stacksreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Intro" component={Intropage} /> */}
        <Stack.Screen name="Intro" component={TabScreen} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        {/* <Stack.Screen name="Details" component={TabScreen} /> */}
        <Stack.Screen name="Cooking" component={CookingPage} />
        <Stack.Screen name="Settings" component={SettingPage} />
        <Stack.Screen name="Viewall" component={PageViewall} />
        <Stack.Screen name="PageSubmenu" component={PageSubMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacksreens;