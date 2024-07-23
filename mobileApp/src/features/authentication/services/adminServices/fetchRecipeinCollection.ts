import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { userPostData } from "../../commonData/userPostData";

export interface Recipe {
  _id: string;
  foodName: string;
  foodImage: string;
}

export interface recipeResponse {
  name: string;
  success: boolean;
  results: Recipe[];
}
export async function fetchRecipeByCollectionID(
  collectionID: string
): Promise<any> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchRecipeByCollectionID/${collectionID}`
    );
    return res.data.recipeData[0];
  } catch (error: any) {
    throw new Error(error);
  }
}
