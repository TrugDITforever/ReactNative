import { createSlice } from "@reduxjs/toolkit";
interface FoodData {
  foodId: number;
  foodName: string;
  foodImage: string;
  calories: number;
  level: string;
  serves: number;
  description: string;
  ingredients: string[];
  instructions: string;
}

const initialState: FoodData = {
  foodId: 1,
  foodName: "japanese",
  foodImage: "string",
  calories: 123,
  level: "string",
  serves: 1,
  description: "string",
  ingredients: [""],
  instructions: "string",
};
export const foodinfo = createSlice({
  name: "foodinfo",
  initialState,
  reducers: {
    updateFoodInfo: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
  },
});
export const { updateFoodInfo } = foodinfo.actions;
export default foodinfo.reducer;
