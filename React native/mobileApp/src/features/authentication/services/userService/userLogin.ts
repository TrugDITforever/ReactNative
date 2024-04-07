import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface UserDataLogin {
  id: number;
  name: string;
  usernames: string;
  email: string;
  password: string;
  success: string;
  dataUser: any;
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
