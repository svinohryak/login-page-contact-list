import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserContacts } from "./actionCreators";

export interface IName {
  first: string;
  last: string;
}

export interface IPicture {
  medium: string;
  thumbnail: string;
}

export interface ILogin {
  uuid: string;
}

export interface IUserContact {
  name: IName;
  email: string;
  picture: IPicture;
  login: ILogin;
}

export interface IUserContactState {
  userContacts: IUserContact[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserContactState = {
  userContacts: [],
  isLoading: false,
  error: "",
};

export const userContactsSlice = createSlice({
  name: "userContacts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserContacts.fulfilled.type]: (
      state,
      action: PayloadAction<IUserContact[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.userContacts = action.payload;
    },
    [fetchUserContacts.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchUserContacts.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export default userContactsSlice.reducer;
