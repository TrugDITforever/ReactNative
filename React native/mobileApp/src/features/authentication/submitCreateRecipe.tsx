import { createRecipe } from "./services/userService/createRecipe";

export interface RecipeData {
  foodid: string;
  foodName: string;
  foodImage: string;
  description: string;
  ingredients: string;
  instructions: string;
  ownerId: string;
}
export async function submitCreateRecipes(recipeData: RecipeData) {
  try {
    const res = await createRecipe(recipeData);
    if (res) {
      return res;
    } else {
      throw new Error("Cant create recipe");
    }
  } catch (error) {
    throw new Error("Cant create recipe");
  }
}
