import React, { useState, useEffect } from "react";
import { getFoodData } from "../services/adminServices/getFoodData";
interface FoodData {
  foodId: number;
  foodName: string;
  foodImage: string;
  calories: number;
  level: string;
  serves: number;
  description: string;
  ingredients: string;
  instruction: string;
}
export const useFetchFoodData = () => {
  const [foodData, setFoodData] = useState<FoodData[]>([]);
  const [isloading, setisloading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFoodData();
        if (res) {
          setisloading(false);
          setFoodData(res);
        }
      } catch (error) {
        console.error("Error fetching food data:", error);
        setisloading(true);
      }
    };

    fetchData();
  }, [isloading]);
  return { foodData, isloading };
};
