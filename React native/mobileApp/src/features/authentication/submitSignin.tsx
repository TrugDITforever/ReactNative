import { updateUser } from "../../Redux/user";
import { loginUser } from "./services/userService/userLogin";
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
    const value = {
      email: email,
      password: password,
    };
    try {
      loginUser(value.email, value.password).then((res) => {
        if (res) {
          const newValue = {
            id: res.dataUser._id,
            userimage: res.dataUser.profileImage,
            username: res.dataUser.username,
            name : res.dataUser.name,
            email: res.dataUser.email,
            description : res.dataUser.description,

          };
          dispatch(updateUser(newValue));
          navigation.navigate("Details");
          setaccerr(false);
        } else {
          setaccerr(true);
        }
      });
    } catch (error: any) {
      console.error("AxiosError:", error.message);
    }
  } else {
    setemailerr(true);
    setpasserr(true);
  }
};
