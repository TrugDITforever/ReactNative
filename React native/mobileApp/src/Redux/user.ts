import { createSlice } from "@reduxjs/toolkit";

interface User{
  name: string
  username: string,
  password: string,
  email: string,
  decription: string,
}
const initialState: User ={
  name: "Quang Trung",
  username: "TrungQ",
  password: "123",
  email: "dotrung1512@gmail.com",
  decription: "I love cooking with different recipes",

}
export const userinfo = createSlice({
  name: "userinfo",
  initialState,
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
    updateUsername: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
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
  updateUsername,
} = userinfo.actions;
export default userinfo.reducer;
