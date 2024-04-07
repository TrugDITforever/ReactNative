import { createSlice } from "@reduxjs/toolkit";
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

const initialState: FoodData = {
  foodId: 1,
  foodName: "japanese",
  foodImage: "",
  calories: 123,
  level: "string",
  serves: 1,
  description: "string",
  ingredients: "string",
  instruction: "string",
};
export const foodinfo = createSlice({
  name: "foodinfo",
  initialState,
  reducers: {
    updateFoodInfo: (state, aciton) => {
      return {
        ...state,
        foodId: aciton.payload.foodId,
        foodName: aciton.payload.foodName,
        foodImage: aciton.payload.foodImage,
        calories: aciton.payload.calories,
        level: aciton.payload.level,
        serves: aciton.payload.serves,
        description: aciton.payload.decription,
        ingredients: aciton.payload.ingredients,
        instruction: aciton.payload.instruction,
      };
    },
  },
});
export const { updateFoodInfo } = foodinfo.actions;
export default foodinfo.reducer;
