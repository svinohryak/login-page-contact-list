import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IChangedContactData,
  IUserContact,
  IUserContactState,
} from "../../types/types";
import { fetchUserContacts } from "./actionCreators";

const initialState: IUserContactState = {
  userContacts: [],
  isLoading: false,
  error: "",
};

export const userContactsSlice = createSlice({
  name: "userContacts",
  initialState,
  reducers: {
    removeContact(state, action: PayloadAction<string>) {
      return {
        ...state,
        userContacts: state.userContacts.filter((contact) => {
          return contact.login.uuid !== action.payload;
        }),
      };
    },
    updateUserContact(state, action: PayloadAction<IChangedContactData>) {
      return {
        ...state,
        userContacts: [...state.userContacts].map((contact) => {
          if (contact.login.uuid === action.payload.uuid) {
            return {
              ...contact,
              name: action.payload.name,
            };
          }
          return contact;
        }),
      };
    },
  },
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
