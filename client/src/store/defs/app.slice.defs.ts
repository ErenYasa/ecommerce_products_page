import { Products } from "@/services/product/product.defs";

export interface IAppState {
    localLoader: boolean;
    appLoader: boolean;
    products: Products;
    activeProducts: Products;
    filterItems: {
        [key: string]: any;
    };
    activeFilters: {
        [key: string]: any;
    };
    currentPage: number;
    itemOffset: number;
    endOffset: number;
}
