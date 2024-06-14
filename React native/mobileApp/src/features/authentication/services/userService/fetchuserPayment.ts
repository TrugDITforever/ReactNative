import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

interface Payment {
  _id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  date: string;
}

export interface paymentResponse {
  success: boolean;
  payment: Payment[];
}

export async function fetchUserPayments(
  userID: string
): Promise<paymentResponse> {
  try {
    const res = await axios.get(`${BASE_URL}:8080/api/fetchInvoices/${userID}`);
    return res.data.payment;
  } catch (error: any) {
    return error.response.data;
  }
}
