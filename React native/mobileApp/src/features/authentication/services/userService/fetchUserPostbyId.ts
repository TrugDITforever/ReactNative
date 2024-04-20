import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { userPostData } from "../../commonData/userPostData";
export async function fetchUserPostById(
  userId: string
): Promise<userPostData[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchUserPostById/${userId}`
    );
    return res.data.postData;
  } catch (error: any) {
    throw new Error(error);
  }
}
