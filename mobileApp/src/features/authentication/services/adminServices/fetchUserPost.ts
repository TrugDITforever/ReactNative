import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { userPostData } from "../../commonData/userPostData";
export async function fetchUserPost(): Promise<userPostData[]> {
  try {
    const res = await axios.get(`${BASE_URL}:8080/api/fetchUserposts`);
    return res.data.postData;
  } catch (error: any) {
    throw new Error(error);
  }
}
