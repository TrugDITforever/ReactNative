import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { FoodData } from "../../commonData/foodData";

export async function searchingRecipe(recipeName: string): Promise<FoodData[]> {
  try {
    const res = await axios.get(`${BASE_URL}:8080/api/searchRecipe`, {
      params: { recipeName: recipeName },
    });
    return res.data.results;
  } catch (error: any) {
    return error.response.data;
  }
}
