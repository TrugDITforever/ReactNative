import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { FoodData } from "../../commonData/foodData";
export async function getFoodData(): Promise<FoodData[]> {
  try {
    const response = await axios.get(`${BASE_URL}:8080/v1/getAllfood`);
    return response.data.foodData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
