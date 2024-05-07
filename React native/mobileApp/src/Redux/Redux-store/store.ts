import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../user";
import foodReducer from "../food";
import postforFoodReducer from "../postforfood";
export default configureStore({
  reducer: {
    userinfo: useReducer,
    foodinfo: foodReducer,
    postforfood: postforFoodReducer,
  },
});
