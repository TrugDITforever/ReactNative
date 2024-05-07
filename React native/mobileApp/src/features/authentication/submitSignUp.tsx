import { userRegister } from "./services/userService/userSignup";
import { updateUser } from "../../Redux/user";
import { err } from "react-native-svg/lib/typescript/xml";
import { saveToken } from "./auth/saveToken";
import { saveUserData } from "./auth/saveUserData";
export const SubmitSignUp = async (
  name: string,
  email: string,
  password: string,
  navigation: any,
  setaccerr: (value: boolean) => void,
  setGeneralError: (value: string) => void,
  dispatch: any
) => {
  if (email && password && name) {
    setaccerr(false);
    const value = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const { token, dataUser, success, error } = await userRegister(
        value.name,
        value.email,
        value.password
      );
      if (success && dataUser && token) {
        console.log(dataUser);
        const newValue = {
          id: dataUser._id,
          userimage: dataUser.profileImage,
          username: dataUser.username,
          name: dataUser.name,
          email: dataUser.email,
          description: dataUser.description,
        };
        saveToken(token);
        saveUserData(dataUser);
        dispatch(updateUser(newValue));
        navigation.navigate("Details");
        setaccerr(false);
      } else if (success == false && error) {
        setGeneralError(error);
        setaccerr(true);
      }
    } catch (error: any) {
      setGeneralError(error);
      setaccerr(true);
    }
  } else {
    setGeneralError("Please fill in the information");
    setaccerr(true);
  }
};
