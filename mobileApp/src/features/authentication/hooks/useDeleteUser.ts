import { deleteAcc } from "../services/userService/userdeleteAcc";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useDeleteacc = async (userid: string, navigation: any) => {
  try {
    const dataUser = await deleteAcc(userid);
    console.log(dataUser);
    if (dataUser) {
      AsyncStorage.removeItem("token");
      navigation.replace("Intro");
    }
  } catch (error) {
    throw new Error("cant update info");
  }
};
