import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { IAppState } from "../defs/app.slice.defs";
import { Products } from "@/services/product/product.defs";

const initialState: IAppState = {
    localLoader: false,
    appLoader: false,
    products: [],
    activeProducts: [],
    filterItems: {
        brand: [],
        color: [],
    },
    activeFilters: {
        brand: "",
        color: "",
        stock: "off",
        sort: "all",
    },
    currentPage: 0,
    itemOffset: 0,
    endOffset: 8,
};

export const appSlice: Slice<IAppState> = createSlice({
    name: "App",
    initialState,
    reducers: {
        setLocalLoader: (state, { payload }: PayloadAction<boolean>) => {
            state.localLoader = payload;
        },
        setAppLoader: (state, { payload }: PayloadAction<boolean>) => {
            state.localLoader = payload;
        },
        setProducts: (state, { payload }: PayloadAction<Products>) => {
            state.products = payload;
        },
        setActiveProducts: (state, { payload }: PayloadAction<Products>) => {
            state.activeProducts = payload;
        },
        setFilterItems: (
            state,
            {
                payload,
            }: PayloadAction<{ name: "brand" | "color"; data: string[] }>
        ) => {
            const { name, data } = payload;

            state.filterItems[name] = data;
        },
        setActiveFilters: (
            state,
            { payload }: PayloadAction<{ data: any }>
        ) => {
            state.activeFilters = payload;
        },
        setCurrentPage: (state, { payload }: PayloadAction<number>) => {
            state.currentPage = payload;
        },
        setItemOffset: (state, { payload }: PayloadAction<number>) => {
            state.itemOffset = payload;
        },
        setEndOffset: (state, { payload }: PayloadAction<number>) => {
            state.endOffset = payload;
        },
    },
});

export const {
    setLocalLoader,
    setAppLoader,
    setProducts,
    setActiveProducts,
    setFilterItems,
    setActiveFilters,
    setCurrentPage,
    setItemOffset,
    setEndOffset,
} = appSlice.actions;

export default appSlice.reducer;
