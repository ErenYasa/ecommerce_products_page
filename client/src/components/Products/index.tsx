import { useEffect } from "react";
import { ScreenSizes } from "@/types";
import {
    ProductsList,
    ProductsStyle,
    ProductsTop,
    ProductsTopLeft,
    ProductsTopRight,
} from "./styled";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveFilters } from "@/store/slices/app.slice";
import { openModal } from "@/store/slices/modal.slice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import StockFilter from "../FilterElements/StockFilter";
import { Button } from "../Buttons";
import { IconFilter } from "@/icons";
import DropdownList from "../DropdownList";
import ProductCard from "../ProductCard";
import SortingFilter from "../FilterElements/SortingFilter";
import { handleFilters } from "@/helpers";
import { initFilters } from "@/helpers/filterHelpers";

export default function Products() {
    const isMedium = useMediaQuery(
        `(min-width: ${ScreenSizes.SM}) and (max-width: 1023px)`
    );
    const isMobileOut = useMediaQuery("(min-width: 576px)");
    const dispatch = useAppDispatch();
    const { products, activeProducts, activeFilters } = useAppSelector(
        (state) => state.App
    );

    console.log("active", activeProducts);

    useEffect(() => {
        dispatch(setActiveFilters(initFilters()));
    }, []);

    useEffect(() => {
        handleFilters();
    }, [products, activeFilters]);

    const openFiltersModal = () => {
        dispatch(openModal({ name: "filters", data: "" }));
    };

    return (
        <ProductsStyle>
            <ProductsTop>
                {isMedium && (
                    <ProductsTopLeft>
                        <Button $kind="dark" onClick={openFiltersModal}>
                            <IconFilter width="18" height="19" />
                            Filters
                        </Button>
                        <StockFilter />
                    </ProductsTopLeft>
                )}
                <ProductsTopRight>
                    {isMobileOut && <SortingFilter />}
                </ProductsTopRight>
            </ProductsTop>
            <ProductsList>
                <ProductCard isDiscount={true} />
                <ProductCard isDiscount={false} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductsList>
        </ProductsStyle>
    );
}
