import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface UserDataLogin {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  dataUser: any;
  success: string;
}
export async function loginUser(
  email: string,
  password: string
): Promise<UserDataLogin> {
  try {
    const response = await axios.post(`${BASE_URL}:8080/v1/checkuser`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
