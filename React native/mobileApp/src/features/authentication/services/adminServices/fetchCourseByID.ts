import axios from "axios";
import { BASE_URL } from "../fixIp/ip";
import { userPostData } from "../../commonData/userPostData";

export interface Course {
  _id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  ownerID: string;
}

export interface courseResponse {
  success: boolean;
  courses: Course[];
}
export async function fetchingCoursesByID(
  courseID: string
): Promise<courseResponse> {
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/fetchCoursebyID/${courseID}`
    );
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
