import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
interface deleteResponse {
  success: boolean;
}
export async function deleteRecipe(recipeId: string): Promise<deleteResponse> {
  try {
    const response = await axios.delete(
      `${BASE_URL}:8080/api/deleteRecipe/${recipeId}`
    );
    return response.data.success;
  } catch (error: any) {
    throw new Error(error);
  }
}
