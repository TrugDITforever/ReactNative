import { updateUser } from "../../Redux/user";
import { loginUser } from "./services/userService/userLogin";
import { saveToken } from "./auth/saveToken";
import { saveUserData } from "./auth/saveUserData";
export const SubmitSignIn = async (
  email: string,
  password: string,
  setemailerr: (value: boolean) => void,
  setpasserr: (value: boolean) => void,
  navigation: any,
  dispatch: any,
  setAccErr: (value: boolean) => void
) => {
  if (email && password) {
    setemailerr(false);
    setpasserr(false);
    const value = {
      email: email,
      password: password,
    };
    try {
      const { token, dataUser, success, error } = await loginUser(
        value.email,
        value.password
      );
      if (success && dataUser && token) {
        const newValue = {
          id: dataUser._id,
          userimage: dataUser.profileImage,
          username: dataUser.username,
          name: dataUser.name,
          email: dataUser.email,
          description: dataUser.description,
        };
        console.log(token);
        saveToken(token);
        saveUserData(dataUser);
        dispatch(updateUser(newValue));
        navigation.navigate("Details");
      } else {
        setAccErr(true);
      }
    } catch (error: any) {
      setAccErr(true);
    }
  } else {
    setemailerr(true);
    setpasserr(true);
  }
};
