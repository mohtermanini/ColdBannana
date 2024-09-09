import { appRoutes } from "@/common/data/appRoutes";
import { apiSlice } from "@/common/services/redux/createAppSlice";

/*********************** Slice ***********************/
const productsExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ filters = {} } = {}) => ({
        url: appRoutes.products.index(),
        params: { ...filters },
      }),
      transformResponse: (responseData) => {
        return responseData?.[0];
      },
      providesTags: (result, error, arg) => [
        { type: "Product", id: "List" },
        ...(result ? result.map((product) => ({ type: "Product", id: product.id })) : []),
      ],
    }),
  }),
});

export const { useGetProductsQuery } = productsExtendedApiSlice;
