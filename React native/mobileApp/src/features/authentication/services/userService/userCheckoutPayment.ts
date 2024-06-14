import axios, { AxiosResponse } from "axios";
import { FoodData } from "../../commonData/foodData";

import { BASE_URL } from "../fixIp/ip";
import { Cart } from "./fetchUserShoppingCart";

interface PaymentResponse {
  success?: boolean;
}

export async function checkoutPayment(
  userID: string,
  paymentList: Cart[]
): Promise<PaymentResponse> {
  console.log(paymentList);
  try {
    const res = await axios.put(
      `${BASE_URL}:8080/api/checkoutPayment/${userID}`,
      { paymentList: paymentList }
    );
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}
