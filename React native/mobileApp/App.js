import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import Intropage from "./components/View/IntroPage/Intropage";
import AccountPage from "./components/View/AccountPage/AccountPage";
// import for navigationP
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabScreen } from "./routers/navigation/screens";
// Redux
import { Provider } from "react-redux";
import store from "./components/Redux-store/store";
// Start code navigation
const Stack = createNativeStackNavigator();
// loading custom font
const loadCustomFonts = async () => {
  await Font.loadAsync({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-semiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
};
const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  if (!isFontLoaded) {
    loadCustomFonts()
      .then(() => setIsFontLoaded(true))
      .catch((error) => console.error("Error loading fonts:", error));

    return null; // Render a loading indicator or fallback while fonts are loading
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          {/* <Stack.Screen name="Intro" component={Intropage} /> */}
          <Stack.Screen name="Intro" component={TabScreen} />

          <Stack.Screen name="AccountPage" component={AccountPage} />
          <Stack.Screen name="Details" component={TabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
