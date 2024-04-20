import { userRegister } from "./services/userService/userSignup";
import { updateUser } from "../../Redux/user";
import { err } from "react-native-svg/lib/typescript/xml";
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
      const result = await userRegister(
        value.name,
        value.email,
        value.password
      );
      console.log(result);
      if (result.success == true) {
        const newValue = {
          id: result.dataUser._id,
          userimage: result.dataUser.profileImage,
          username: result.dataUser.username,
          name: result.dataUser.name,
          email: result.dataUser.email,
          description: result.dataUser.description,
        };
        dispatch(updateUser(newValue));
        navigation.navigate("Details");
        setaccerr(false);
      } else if (result.success == false) {
        setGeneralError(result.error);
        setaccerr(true);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  } else {
    setGeneralError("Please fill in the information");
    setaccerr(true);
  }
};
