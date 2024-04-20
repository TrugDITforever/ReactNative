import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface UserData {
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  profileImage?: string;
  password?: string;
  description?: string;
  dataUser?: any;
  success: boolean;
  error: string;
}
export async function userRegister(
  fullname: string,
  email: string,
  password: string
): Promise<UserData> {
  try {
    const response = await axios.post(`${BASE_URL}:8080/api/userRegister`, {
      fullname,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}
