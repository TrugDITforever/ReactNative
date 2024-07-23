import axios from "axios";
import { FoodData } from "../../commonData/foodData";
import { BASE_URL } from "../fixIp/ip";

export async function getFoodbyID(foodId: String): Promise<FoodData> {
  try {
    const res = await axios.get(`${BASE_URL}:8080/api/getFoodbyID/${foodId}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
