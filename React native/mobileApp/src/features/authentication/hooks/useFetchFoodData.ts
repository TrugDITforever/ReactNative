import React, { useState, useEffect } from "react";
import { getFoodData } from "../services/adminServices/getFoodData";
import { FoodData } from "../commonData/foodData";
export const useFetchFoodData = (mealType: string) => {
  const [foodData, setFoodData] = useState<FoodData[]>([]);
  const [isloading, setisloading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFoodData(mealType);
        if (res) {
          setisloading(false);
          setFoodData(res);
        }
      } catch (error) {
        setisloading(true);
      }
    };

    fetchData();
  }, [isloading]);
  return { foodData, isloading };
};
