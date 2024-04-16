import axios from "axios";
import { FoodData } from "../../commonData/foodData";
import { BASE_URL } from "../fixIp/ip";

export async function getFoodbyID(foodId: String): Promise<FoodData> {
  try {
    const res = await axios.post(`${BASE_URL}:8080/v1/getFoodbyID/${foodId}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
