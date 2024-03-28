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
