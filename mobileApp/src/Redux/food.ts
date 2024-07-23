import { createSlice } from "@reduxjs/toolkit";
interface FoodData {
  foodId: string;
  foodName: string;
  foodImage: string;
  calories: number;
  level: string;
  serves: number;
  description: string;
  ingredients: [];
  instructions: string;
  ownerId: string;
}

const initialState: FoodData = {
  foodId: "",
  foodName: "",
  foodImage: "testing",
  calories: 0,
  level: "",
  serves: 1,
  description: "string",
  ingredients: [],
  instructions: "string",
  ownerId: "string",
};
export const foodinfo = createSlice({
  name: "foodinfo",
  initialState,
  reducers: {
    updateFoodInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { updateFoodInfo } = foodinfo.actions;
export default foodinfo.reducer;
