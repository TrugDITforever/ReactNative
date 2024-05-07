import axios, { AxiosResponse } from "axios";
import { FoodData } from "../../commonData/foodData";
import { BASE_URL } from "../fixIp/ip";

interface RecipeData {
  foodid?: string;
  foodName: string;
  foodImage: string;
  description: string;
  ingredients: string;
  instructions: string;
  ownerId?: string;
}

export async function createRecipe(recipeData: RecipeData): Promise<FoodData> {
  try {
    const res = await axios.post(
      `${BASE_URL}:8080/api/createRecipe`,
      recipeData
    );
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}
