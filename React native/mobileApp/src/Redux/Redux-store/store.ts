import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../user";
import foodReducer from "../food"
export default configureStore({
  reducer: {
    userinfo: useReducer,
    foodinfo: foodReducer,
  },
});
