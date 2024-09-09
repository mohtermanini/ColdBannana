import { axiosClient } from "@/common/services/axios/axiosClient";
import { createApi } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery = async ({ url, method, body, params, headers }) => {
  try {
    const result = await axiosClient.request({ url, method, data: body, params, headers });
    return { data: result.data };
  } catch (axiosError) {
    return {
      error: {
        status: axiosError.response?.status,
        data: axiosError.response?.data || axiosError.message,
      },
    };
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({}),
});
