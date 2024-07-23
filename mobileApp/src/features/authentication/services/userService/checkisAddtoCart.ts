import { BASE_URL } from "../fixIp/ip";
import axios from "axios";

export interface PropCourse {
  userID: string;
  courseID: string;
}
export async function checkIsaddToCart(
  userID: string,
  courseID: string
): Promise<boolean> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/checkIsAddToCart/${userID}`,
      {
        params: {
          courseID: courseID,
        },
      }
    );
    return res.data.exist;
  } catch (error) {
    return false;
  }
}
