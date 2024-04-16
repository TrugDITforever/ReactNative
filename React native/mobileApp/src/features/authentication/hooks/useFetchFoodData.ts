import React, { useState, useEffect } from "react";
import { getFoodData } from "../services/adminServices/getFoodData";
import { FoodData } from "../commonData/foodData";
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
