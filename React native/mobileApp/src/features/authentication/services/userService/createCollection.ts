import axios, { AxiosResponse } from "axios";
import { FoodData } from "../../commonData/foodData";
import { BASE_URL } from "../fixIp/ip";

export interface collectionData {
  id?: string;
  name: string;
  ownerId: string;
  recipeID: [];
}

export async function createCollection(
  collection: collectionData
): Promise<collectionData[]> {
  try {
    const res = await axios.post(
      `${BASE_URL}:8080/api/createCollection/${collection.ownerId}`,
      {
        collection,
      }
    );
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}
