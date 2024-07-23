import AsyncStorage from "@react-native-async-storage/async-storage";
interface UserData {
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  profileImage?: string;
  password?: string;
  description?: string;
}

export async function getUserAsyncData() {
  try {
    const userdata = await AsyncStorage.getItem("userData");
    if (userdata) {
      const userData = JSON.parse(userdata);
      return userData;
    }
  } catch (error) {
    throw new Error("can't get user data");
  }
}
