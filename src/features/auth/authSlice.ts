import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
};

const initialState: AuthState = {
  isAuthenticated: !!sessionStorage.getItem("token"),
  token: sessionStorage.getItem("token"),
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      ((state.isAuthenticated = true), (state.token = action.payload));
    },
    signOut: (state, action: PayloadAction<string>) => {
      ((state.isAuthenticated = false), (state.token = action.payload));
    },
  },
});

export const { signOut, signIn } = auth.actions;

export default auth.reducer;
