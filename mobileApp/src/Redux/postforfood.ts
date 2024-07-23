import { createSlice } from "@reduxjs/toolkit";
import { updateDecription } from "./user";
interface FoodData {
  foodId: string;
  foodName: string;
  foodImage: string;
  description: string;
  ingredients: [];
  instructions: string;
  ownerId: string;
}

const initialState: FoodData = {
  foodId: "",
  foodName: "",
  foodImage: "",
  description: "",
  ingredients: [],
  instructions: "",
  ownerId: "",
};
export const postforfood = createSlice({
  name: "postiforfood",
  initialState,
  reducers: {
    updatepostFoodInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateFoodName: (state, action) => {
      return {
        ...state,
        foodName: action.payload.foodName,
      };
    },
    updateFoodImage: (state, action) => {
      return {
        ...state,
        foodImage: action.payload.foodImage,
      };
    },
    updateingredients: (state, action) => {
      return {
        ...state,
        ingredients: action.payload.ingredients,
      };
    },
    updatedinstructions: (state, action) => {
      return {
        ...state,
        instructions: action.payload.instructions,
      };
    },
    updatedecription: (state, action) => {
      return {
        ...state,
        description: action.payload.description,
      };
    },
    updateOwnerId: (state, action) => {
      return {
        ...state,
        ownerId: action.payload.ownerId,
      };
    },
    clearAllFields: (state) => {
      return {
        ...initialState,
      };
    },
    clearFoodImage: (state) => {
      state.foodImage = "";
    },
  },
});
export const {
  updatepostFoodInfo,
  updateFoodImage,
  updateFoodName,
  updatedinstructions,
  updateingredients,
  updatedecription,
  updateOwnerId,
  clearAllFields,
  clearFoodImage,
} = postforfood.actions;
export default postforfood.reducer;
