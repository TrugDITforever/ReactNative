import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../user";
export default configureStore({
  reducer: {
    userinfo: useReducer,
  },
});
