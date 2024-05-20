import "react-native-gesture-handler";
import React, { useState } from "react";
import Intropage from "../../pages/IntroPage/Intropage";
import AccountPage from "../../pages/AccountPage/index";
import SettingPage from "../../pages/SettingPage/SettingPage";
import CookingPage from "../../pages/CookingPage/CookingPage";
import PageViewall from "../../pages/PageViewall/components/PageViewall";
import PageSubMenu from "../../pages/SettingPage/components/PageSubMenu/index";
// import for navigationP
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabScreen } from "../Tabnavigate/screens";
import CreateRecipeScreen from "../../pages/CreateRecipesPage";
import { Prop } from "../../components/Card/commonProp";

// Start code navigation
const Stack = createNativeStackNavigator();
// loading custom font
const Stacksreens: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Intropage} />
      {/* <Stack.Screen name="Intro" component={AccountPage} /> */}
      <Stack.Screen name="AccountPage" component={AccountPage} />
      <Stack.Screen name="Details" component={TabScreen} />
      <Stack.Screen name="Cooking" component={CookingPage} />
      <Stack.Screen name="Settings" component={SettingPage} />
      <Stack.Screen name="Viewall" component={PageViewall} />
      <Stack.Screen name="PageSubmenu" component={PageSubMenu} />
      <Stack.Screen name="CreateRecipePage" component={CreateRecipeScreen} />
    </Stack.Navigator>
  );
};
export default Stacksreens;
