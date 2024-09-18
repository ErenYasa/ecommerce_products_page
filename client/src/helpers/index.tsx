import dayjs from "dayjs";
import { store } from "@/store";
import {
    setActiveProducts,
    setCurrentPage,
    setEndOffset,
    setItemOffset,
} from "@/store/slices/app.slice";
import { Products } from "@/services/product/product.defs";
import { IEnv } from "./helpers.defs";
import { removeParameter } from "./filterHelpers";

/* ENVIRONMENT AYRIMI İÇİN */
export const getEnv = (): IEnv => {
    if (process.env.NODE_ENV === "development") return "DEV";
    return "PROD";
};

export const handleFilters = () => {
    /* TÜM ÜRÜNLERİ VE AKTİF OLAN FİLTRELERİ STORE'DAN ALIYORUZ. */
    const { products, activeFilters } = store.getState().App;

    /* FİLTRELEME İÇİN ÜRÜNLERİN BİR KOPYASINI OLUŞTURUYORUZ. */
    let newProducts: Products = [...products];

    /* BRAND FİLTRESİ İÇİN - EĞER SEÇİLİ BRAND VARSA FİLTRE ÇALIŞIYOR. */
    if (activeFilters.brand) {
        /* STRING OLARAK TUTALAN BRAND'LERİ ARRAY'E ÇEVİRİYORUZ. */
        const parsedFilter = activeFilters.brand.split(", ");

        /* FİLTRELEME İŞLEMİNİ GERÇEKLEŞTİRİP, OLUŞTURDUĞUMUZ KOPYA İLE FİLTRELENMİŞ ÜRÜNLERİ EŞİTLİYORUZ. */
        newProducts = newProducts.filter((product) =>
            parsedFilter.includes(product.brand.toLowerCase())
        );

        /* FİLTRE SEÇİLİRSE PAGE'I SIFIRLIYORUZ. */
        resetPage();
    }
    /*  */

    /* COLOR FİLTRESİ İÇİN - EĞER SEÇİLİ COLOR VARSA FİLTRE ÇALIŞIYOR. */
    if (activeFilters.color) {
        const parsedFilter = activeFilters.color.split(", ");
        newProducts = newProducts.filter((product) =>
            parsedFilter.includes(product.color.toLowerCase())
        );

        resetPage();
    }
    /*  */

    /* STOCK FİLTRESİ İÇİN */
    if (activeFilters.stock) {
        newProducts = newProducts.filter((product) => product.quantity > 0);

        /* FİLTRE SEÇİLİRSE PAGE'I SIFIRLIYORUZ. */
        resetPage();
    }
    /*  */

    /* SORTING FİLTRESİ İÇİN */
    if (activeFilters.sort) {
        switch (activeFilters.sort) {
            case "new":
                /* TARİHLERİ TIMESTAMP'E ÇEVİR VE BÜYÜK OLANI DÖNDÜR. BÜYÜK OLAN YENİ OLAN DEMEKTİR. */
                newProducts.sort(
                    (a, b) =>
                        dayjs(b.registeredAt).unix() -
                        dayjs(a.registeredAt).unix()
                );
                break;
            case "asc":
                newProducts.sort((a, b) => +a.price - +b.price);
                break;
            case "dsc":
                newProducts.sort((a, b) => +b.price - +a.price);
                break;
            default:
                break;
        }

        /* FİLTRE SEÇİLİRSE PAGE'I SIFIRLIYORUZ. */
        resetPage();
    }
    /*  */

    /* FİLTRE UYGULANMIŞ ÜRÜNLERİ "activeProducts" STATE'İNE ATARAK, ÜRÜNLERİ BU STATE ÜZERİNDEN GÖSTERİYORUZ. */
    store.dispatch(setActiveProducts(newProducts));
    return newProducts;
};

/* HER HANGİ BİR FİLTRE SEÇİMİNDE, TÜM PAGINATION VERİLERİNİ SIFIRLIYORUZ. */
export const resetPage = () => {
    const { dispatch } = store;

    dispatch(setCurrentPage(0));
    dispatch(setItemOffset(0));
    dispatch(setEndOffset(8));
    removeParameter("page");
};
