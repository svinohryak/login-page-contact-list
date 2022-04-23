import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reucers/userSlice";
import userContactsReducer from "./reucers/userContactsSlice";

const rootReducer = combineReducers({ userReducer, userContactsReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    userContacts: userContactsReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
