import { configureStore } from "@reduxjs/toolkit";

import { api } from "../features";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sidebar: sidebarReducer,

    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
