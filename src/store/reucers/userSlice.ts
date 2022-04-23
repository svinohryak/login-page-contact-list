import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  isSignIn: boolean;
}

const initialState: IUser = {
  isSignIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser(state) {
      state.isSignIn = true;
    },
    signOutUser(state) {
      state.isSignIn = false;
    },
  },
});

export default userSlice.reducer;
