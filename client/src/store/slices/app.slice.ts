import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { IAppState } from "../defs/app.slice.defs";
import { Products } from "@/services/product/product.defs";

const initialState: IAppState = {
    localLoader: false,
    appLoader: false,
    produtcs: [],
    activeProducts: [],
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
            state.produtcs = payload;
        },
        setActiveProducts: (state, { payload }: PayloadAction<Products>) => {
            state.activeProducts = payload;
        },
    },
});

export const { setLocalLoader, setAppLoader, setProducts, setActiveProducts } =
    appSlice.actions;

export default appSlice.reducer;
