import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL as string,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");

      const token = sessionStorage.getITem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
