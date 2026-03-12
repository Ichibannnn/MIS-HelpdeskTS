import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/user.types";

type UserState = User | null;

const initialState: UserState = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user") as string) : null;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUserDetails: () => {
      return null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = user.actions;

export default user.reducer;
