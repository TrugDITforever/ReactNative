import { createSlice } from "@reduxjs/toolkit";
export const userinfo = createSlice({
  name: "userinfo",
  initialState: {
    name: "Quang Trung",
    password: "123",
    email: "dotrung1512@gmail.com",
    decription: "I love cooking with different recipes",
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
    updateDecription: (state, action) => {
      return {
        ...state,
        decription: action.payload.decription,
      };
    },
  },
});
export const {
  updateUser,
  updateName,
  updatePassword,
  updateEmail,
  updateDecription,
} = userinfo.actions;
export default userinfo.reducer;
