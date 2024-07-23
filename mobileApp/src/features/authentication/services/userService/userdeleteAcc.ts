import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { UserData } from "../../commonData/userData";

interface deleteResponse {
  success?: boolean;
  error?: string;
  deletedUser?: UserData;
}
export async function deleteAcc(userid: string): Promise<deleteResponse> {
  try {
    const response = await axios.delete(
      `${BASE_URL}:8080/api/deleteAccount/${userid}`
    );
    if (response.data.success) {
      //   const dataUser = response.data.dataUser;
      return response.data.deletedUser;
    } else {
      throw new Error("delete info failed");
    }
  } catch (error: any) {
    return error.response.data;
  }
}
