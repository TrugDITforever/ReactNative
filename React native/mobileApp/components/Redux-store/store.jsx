import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Redux/user";
export default configureStore({
  reducer: {
    userinfo: useReducer,
  },
});
