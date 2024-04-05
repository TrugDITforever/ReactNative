import axios from "axios";
import { updateUser } from "../Redux/user";
export const SubmitSignIn = async (
  email: string,
  password: string,
  setemailerr: (value: boolean) => void,
  setpasserr: (value: boolean) => void,
  navigation: any,
  dispatch: any,
  setaccerr: (value: boolean) => void
) => {
  if (email && password) {
    setemailerr(false);
    setpasserr(false);
    var value = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(
        "http://192.168.1.10:8080/v1/checkuser",
        value
      );
      if (res.data.success) {
        navigation.navigate("Details");
        const newValue = {
          name: res.data.dataUser[0].username,
          email: res.data.dataUser[0].email,
          password: res.data.dataUser[0].password,
        };
        dispatch(updateUser(newValue));
        setaccerr(false);
      } else {
        setaccerr(true);
      }
    } catch (error: any) {
      console.error("AxiosError:", error.message);
    }
  } else {
    setemailerr(!true);
    setpasserr(!true);
  }
};
