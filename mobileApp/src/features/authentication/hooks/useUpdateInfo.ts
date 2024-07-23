import { saveUserData } from "../auth/saveUserData";
import { updateinfo } from "../services/userService/userupdateinfo";
import { updateUser } from "../../../Redux/user";
export const useSubmitupdateinfo = async (
  userid: string,
  name: string,
  profilePicture: string,
  username: string,
  email: string,
  description: string,
  dispatch: any
) => {
  try {
    const { dataUser } = await updateinfo(
      userid,
      name,
      profilePicture,
      username,
      email,
      description
    );
    if (dataUser) {
      const newValue = {
        id: dataUser._id,
        userimage: dataUser.profileImage,
        username: dataUser.username,
        name: dataUser.name,
        email: dataUser.email,
        description: dataUser.description,
      };
      saveUserData(dataUser);
      dispatch(updateUser(newValue));
    }
  } catch (error) {
    throw new Error("cant update info");
  }
};
