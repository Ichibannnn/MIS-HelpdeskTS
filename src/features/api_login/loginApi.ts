import type { LoginRequest, LoginResponse } from "../../types/login.types";

import { api } from "../index";

const tags = ["loginApi"];

export const loginApi = api.enhanceEndpoints({ addTagTypes: tags }).injectEndpoints({
  //   reducerPath: tags,
  endpoints: (builder) => ({
    signIn: builder.mutation<LoginResponse, LoginRequest>({
      query: (params) => ({
        url: `Authentication/AuthenticateUser`,
        method: "POST",
        body: params,
      }),
      invalidatesTags: tags,
    }),
  }),
});

export const { useSignInMutation } = loginApi;
