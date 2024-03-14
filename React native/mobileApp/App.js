import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
// import for navigation
import Stackscreens from "./routers/StackNavigate/screens";
// Redux
import { Provider } from "react-redux";
import store from "./components/Redux/Redux-store/store";
// Start code navigation
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
    return null;
  }
  return (
    <Provider store={store}>
      <Stackscreens />
    </Provider>
  );
};
export default App;
