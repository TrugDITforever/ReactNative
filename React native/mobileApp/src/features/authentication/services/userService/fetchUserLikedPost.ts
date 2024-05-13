import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { RejectedActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
interface likedPost {
  _id: string;
  foodImage: string;
}
export interface likedPostResponse {
  _id: string;
  postData: any;
  userpost: likedPost[];
}

export async function fetchUserLikedPost(
  userID: string
): Promise<likedPostResponse[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchUserLikedPostById/${userID}`
    );
    return res.data.postData;
  } catch (error: any) {
    return error.response.data;
  }
}
