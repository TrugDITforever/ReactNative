import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

export interface Cart {
  _id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export interface cartResponse {
  _id: string;
  shoppingcarts: Cart[];
}
export interface CartListResponse {
  cartList: cartResponse;
}
export async function fetchShoppingCart(userid: string): Promise<cartResponse> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchShoppingCart/${userid}`
    );
    return res.data.cartData[0];
  } catch (error: any) {
    return error.response.data;
  }
}
