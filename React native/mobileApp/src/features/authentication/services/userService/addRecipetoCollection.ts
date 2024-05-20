import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

export interface CollectionProp {
  collectionID: string;
  recipeID: string;
  ownerID: string;
}
export async function addRecipeToCollection(propCollection: CollectionProp) {
  try {
    const res = await axios.put(
      `${BASE_URL}:8080/api/addRecipetoCollection/${propCollection.ownerID}`,
      {
        propCollection,
      }
    );
    return res.data.success;
  } catch (error) {}
}
