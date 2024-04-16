import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: string;
  name?: string;
  userimage?: string;
  username: string;
  password: string;
  email: string;
  description?: string;
}
const initialState: User = {
  id: "66146d7338795a648ebee701",
  name: "Quang Trung",
  username: "TrungQ",
  userimage:
    "https://th.bing.com/th/id/R.672212381b4893096723bcecdb7f1c27?rik=YvWkjp4%2fJ3e0OQ&pid=ImgRaw&r=0",
  password: "123",
  email: "dotrung1512@gmail.com",
  description: "I love cooking with different recipes",
};
export const userinfo = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        userimage: action.payload.userimage,
        username: action.payload.username,
        name: action.payload.name,
        email: action.payload.email,
        description: action.payload.description,
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
