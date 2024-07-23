import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { UserData } from "../../commonData/userData";

interface updateResponse {
  success?: boolean;
  error?: string;
  dataUser?: UserData;
}
export async function updateinfo(
  userid: string,
  name: string,
  profilePicture: string,
  username: string,
  email: string,
  description: string
): Promise<updateResponse> {
  try {
    const response = await axios.put(
      `${BASE_URL}:8080/api/updateinfo/${userid}`,
      {
        name,
        profilePicture,
        username,
        email,
        description,
      }
    );
    if (response.data.success) {
      const dataUser = response.data.dataUser;
      return { dataUser };
    } else {
      throw new Error("updateinfo failed");
    }
  } catch (error: any) {
    return error.response.data;
  }
}
