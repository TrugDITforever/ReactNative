import axios from "axios";
import { BASE_URL } from "../fixIp/ip";

export interface CourseProp {
  collectionID: string;
  recipeID: string;
  ownerID: string;
}
export async function addCoursetoCart(userID: string, courseID: string) {
  try {
    const res = await axios.put(`${BASE_URL}:8080/api/addCourse/${userID}`, {
      courseID: courseID,
    });
    return res.data.success;
  } catch (error: any) {
    console.log(error);
  }
}
