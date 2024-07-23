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
}

interface LoginResponse {
  success?: boolean;
  error?: string;
  token?: string;
  dataUser?: UserData;
}
export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(
      `${BASE_URL}:8080/api/checkuser`,
      {
        email,
        password,
      }
    );
    if (response.data.success) {
      const token = response.data.token;
      const dataUser = response.data.dataUser;
      const success = response.data.success;
      return { success, token, dataUser };
    } else {
      throw new Error("login failed");
    }
  } catch (error: any) {
    return error.response.data;
  }
}
