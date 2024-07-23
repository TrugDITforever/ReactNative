import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
// import for navigation
import Stackscreens from "./src/routers/StackNavigate/screens";
// Redux
import { Provider } from "react-redux";
import store from "./src/Redux/Redux-store/store";
// Start code navigation
// loading custom font
const loadCustomFonts = async () => {
  await Font.loadAsync({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-semiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
  });
};
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  if (!isFontLoaded) {
    loadCustomFonts()
      .then(() => setIsFontLoaded(true))
      .catch((error) => console.error("Error loading fonts:", error));
    return null;
  }
  /// custom toast message
  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderColor: "green", borderLeftWidth: 5 }}
        // contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontFamily: "Nunito-Bold",
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stackscreens />
      </Provider>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
export default App;
