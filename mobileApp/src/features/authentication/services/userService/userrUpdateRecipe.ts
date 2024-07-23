import axios, { AxiosResponse } from "axios";
import { FoodData } from "../../commonData/foodData";
import { BASE_URL } from "../fixIp/ip";

interface RecipeData {
  foodId: string;
  foodName: string;
  foodImage: string;
  description: string;
  ingredients: string;
  instructions: string;
}
interface Updateresponse {
  success?: boolean;
  newRecipe: RecipeData;
}

export async function updateRecipe(
  recipeData: RecipeData
): Promise<Updateresponse> {
  try {
    const foodId = recipeData.foodId;
    const res = await axios.put(
      `${BASE_URL}:8080/api/updateRecipe/${foodId}`,
      recipeData
    );
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}
