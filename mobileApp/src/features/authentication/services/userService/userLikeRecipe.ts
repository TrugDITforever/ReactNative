import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

interface likeResponse {
  success: boolean;
  added?: string;
  removed?: string;
}

export async function likeRecipe(
  userid: string,
  recipeId: string
): Promise<boolean> {
  try {
    const res = await axios.put(`${BASE_URL}:8080/api/likeRecipe/${userid}`, {
      recipeId,
    });
    return res.data.success;
  } catch (error: any) {
    return error.response.data;
  }
}
