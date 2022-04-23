import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "https://randomuser.me/api/?results=20";

export const fetchUserContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("Loading fail");
    }
  }
);
