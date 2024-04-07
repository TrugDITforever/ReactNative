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
        console.log(res);
        if (res.success) {
          const newValue = {
            name: res.dataUser.username,
            email: res.dataUser.email,
            password: res.dataUser.password,
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
