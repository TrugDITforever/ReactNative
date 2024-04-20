import AsyncStorage from "@react-native-async-storage/async-storage";
export const saveToken = async (tokens: string) => {
  try {
    await AsyncStorage.setItem("token", JSON.stringify(tokens));
  } catch (error) {
    console.error("Error updating token in AsyncStorage:", error);
  }
};
