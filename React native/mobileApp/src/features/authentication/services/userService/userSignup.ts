import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface UserData {
  id: number;
  name: string;
  usernames: string;
  email: string;
  password: string;
  success: string;
  dataUser: any;
}
export async function userRegister(
  name: string,
  email: string,
  password: string
): Promise<UserData> {
  try {
    const response = await axios.post(`${BASE_URL}:8080/v1/userRegister`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
