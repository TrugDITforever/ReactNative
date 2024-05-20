import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

export interface collectionResponse {
  _id: string;
  name: string;
  recipeID: [];
  success: boolean;
}

export async function fetchUserCollections(
  userID: string
): Promise<collectionResponse[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchCollections/${userID}`
    );
    return res.data.collection;
  } catch (error: any) {
    return error.response.data;
  }
}
