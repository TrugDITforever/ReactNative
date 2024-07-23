import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface checkResponse {
  success: boolean;
  exist: boolean;
}
export async function checkIsLike(
  userid: string,
  recipeId: string
): Promise<boolean> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/checklikeRecipe/${userid}`,
      {
        params: {
          recipeId: recipeId,
        },
      }
    );
    return res.data.exist;
  } catch (error: any) {
    return error.response.data;
  }
}
