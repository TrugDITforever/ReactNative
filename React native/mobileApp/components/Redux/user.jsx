import { createSlice } from "@reduxjs/toolkit";
export const userinfo = createSlice({
  name: "userinfo",
  initialState: {
    name: "Trung Do",
    password: "123",
    email: "dotrung1512@gmail.com",
  },
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    updateName: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
      };
    },
    updatePassword: (state, action) => {
      return {
        ...state,
        password: action.payload.password,
      };
    },
    updateEmail: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
      };
    },
  },
});
export const { updateUser, updateName, updatePassword, updateEmail } =
  userinfo.actions;
export default userinfo.reducer;
