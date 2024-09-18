import { useEffect } from "react";
import { ScreenSizes } from "@/types";
import {
    NoProducts,
    ProductsList,
    ProductsStyle,
    ProductsTop,
    ProductsTopLeft,
    ProductsTopRight,
} from "./styled";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import StockFilter from "../FilterElements/StockFilter";
import { Button } from "../Buttons";
import { IconFilter } from "@/icons";
import ProductCard from "../ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/slices/modal.slice";
import SortingFilter from "../FilterElements/SortingFilter";
import { handleFilters } from "@/helpers";
import {
    initFilters,
    removeParameter,
    updatePageParameter,
} from "@/helpers/filterHelpers";
import {
    setActiveFilters,
    setCurrentPage,
    setEndOffset,
    setItemOffset,
} from "@/store/slices/app.slice";
import PagePagination from "../Pagination";
import ProductCount from "../ProductCount";

export function Products() {
    const isMedium = useMediaQuery(
        `(min-width: ${ScreenSizes.SM}) and (max-width: 1023px)`
    );
    const isMobileOut = useMediaQuery("(min-width: 576px)");
    const dispatch = useAppDispatch();
    const {
        products,
        activeProducts,
        activeFilters,
        currentPage,
        itemOffset,
        endOffset,
    } = useAppSelector((state) => state.App);
    const itemsPerPage = 8;

    useEffect(() => {
        /* SAYFA YÜKLENDİĞİNDE, EĞER URL'DE VARSA, PARAMETLERİ STORE'A ATIYORUZ. */
        dispatch(setActiveFilters(initFilters()));
        /*  */

        const initFilter = initFilters();
        if (initFilter.page) {
            dispatch(setCurrentPage(+initFilter.page - 1));
            setItemOffset((+initFilter.page - 1) * itemsPerPage);
        }
    }, []);

    useEffect(() => {
        /* ÜRÜNLER YÜKLENDİĞİNDE YA DA FİLTRELER DEĞİŞTİĞİNDE, FİLTERELİ UYGULAYIP, GÜNCEL OLAN ÜRÜNLERİ "activeProducts" İLE ALIYORUZ */
        handleFilters();
    }, [products, activeFilters]);

    const openFiltersModal = () => {
        dispatch(openModal({ name: "filters", data: "" }));
    };

    /* PAGINATION LOGIC */

    /* O AN Kİ SAYFADA GÖSTERİLECEK ÜRÜNLER */
    const currentItems = activeProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(activeProducts.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset =
            (event.selected * itemsPerPage) % activeProducts.length;

        dispatch(setItemOffset(newOffset));
        dispatch(setEndOffset(newOffset + itemsPerPage));

        /* URL'DE VAR OLAN "page" PARAMETRESİNİ SİLİP, GÜNCELLİYORUZ VE AKTİF OLAN SAYFA NUMARASINI STORE'A YAZIYORUZ. */
        removeParameter("page");
        updatePageParameter(event.selected + 1);
        dispatch(setCurrentPage(event.selected));
    };
    /*  */

    return (
        <ProductsStyle>
            <ProductsTop>
                <ProductsTopLeft>
                    {isMedium ? (
                        <>
                            <Button $kind="dark" onClick={openFiltersModal}>
                                <IconFilter width="18" height="19" />
                                Filters
                            </Button>
                            <StockFilter />
                        </>
                    ) : (
                        <ProductCount count={activeProducts.length} />
                    )}
                </ProductsTopLeft>
                <ProductsTopRight>
                    {isMobileOut && <SortingFilter />}
                </ProductsTopRight>
            </ProductsTop>
            {currentItems.length > 0 ? (
                <>
                    <ProductsList>
                        {currentItems.map((item, i) => (
                            <ProductCard data={item} key={i} />
                        ))}
                    </ProductsList>
                    <PagePagination
                        handlePageClick={handlePageClick}
                        pageCount={pageCount}
                        currentPageNumber={currentPage}
                    />
                </>
            ) : (
                <NoProducts>NO PRODUCTS FOUND.</NoProducts>
            )}
        </ProductsStyle>
    );
}
