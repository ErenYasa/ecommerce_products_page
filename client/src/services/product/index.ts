import {
    setActiveProducts,
    setFilterItems,
    setProducts,
} from "@/store/slices/app.slice";
import { baseApi } from "..";
import { IProduct, Products as IProductsResponse } from "./product.defs";

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
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                queryFulfilled.then((res) => {
                    /**
                     * SET ALL PRODUCTS
                     */
                    dispatch(setProducts(res.data));
                    dispatch(setActiveProducts(res.data));
                    /*  */

                    /**
                     * SET FILTER ITEMS
                     */
                    interface FilterCounts {
                        [key: string]: number;
                    }

                    const brandCount: FilterCounts = {};
                    const colorCount: FilterCounts = {};

                    /* TEKRAR EDEN BRAND VE COLOR'LARI, TEK'E DÜŞÜR */
                    res.data.forEach((product: IProduct) => {
                        const brand = product.brand.toLowerCase();
                        const color = product.color.toLowerCase();

                        /* BRAND/COLOR YOKSA İLGİLİ OBJEYE EKLE VE 1 DEĞERİNİ VER. EĞER VARSA DEĞERİNE 0 EKLE YANİ DEĞERİ DEĞİŞMESİN, Kİ UNIQUE KALSIN */
                        brandCount[brand] =
                            brandCount[brand] === undefined
                                ? 1
                                : brandCount[brand] + 0;
                        colorCount[color] =
                            colorCount[color] === undefined
                                ? 1
                                : colorCount[color] + 0;
                        return false;
                    });

                    /* İLGİLİ YERLERDE KULLANMAK ÜZERE, FİLTRELENMİŞ BRAND/COLOR'LARI STORE'A PUSH'LA */
                    dispatch(
                        setFilterItems({
                            name: "brand",
                            data: Object.keys(brandCount).sort(),
                        })
                    );
                    dispatch(
                        setFilterItems({
                            name: "color",
                            data: Object.keys(colorCount).sort(),
                        })
                    );
                    /*  */

                    /*  */
                });
            },
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;
