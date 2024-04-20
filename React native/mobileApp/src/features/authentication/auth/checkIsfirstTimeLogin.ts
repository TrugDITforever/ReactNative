import AsyncStorage from "@react-native-async-storage/async-storage";

export const isfirstTimeLogin = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    return !!value;
  } catch (error) {
    return false; // Return false by default in case of error
  }
};
