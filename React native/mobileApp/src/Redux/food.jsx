import { createSlice } from "@reduxjs/toolkit";
export const foodinfo = createSlice({
  name: "foodinfo",
  initialState: {
    nameofFood: "Chicken Biyani",
    image: "",
  },
});
