import { baseApi } from "..";
import { IProduct as IProductsResponse } from "./product.defs";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IProductsResponse, any>({
            query: () => ({
                url: "products",
                responseHandler: async (response: Response) => {
                    const json = await response.json();
                    return json;
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;
