import AsyncStorage from "@react-native-async-storage/async-storage";
interface Prop {
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  profileImage?: string;
  password?: string;
  description?: string;
}
export const saveUserData = async (userdata: any) => {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(userdata));
  } catch (error) {
    console.error("Error updating userdata in AsyncStorage:", error);
  }
};
