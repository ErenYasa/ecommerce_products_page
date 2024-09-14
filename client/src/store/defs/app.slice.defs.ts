import { Products } from "@/services/product/product.defs";

export interface IAppState {
    localLoader: boolean;
    appLoader: boolean;
    produtcs: Products;
    activeProducts: Products;
}
