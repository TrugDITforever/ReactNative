import { updateRecipe } from "../services/userService/userrUpdateRecipe";

export interface updateRecipeData {
  foodId: string;
  foodName: string;
  foodImage: string;
  description: string;
  ingredients: string;
  instructions: string;
}
export async function submitUpdateRecipe(recipeData: updateRecipeData) {
  try {
    const res = await updateRecipe(recipeData);
    return res;
  } catch (error) {
    throw new Error("Cant update recipe");
  }
}
