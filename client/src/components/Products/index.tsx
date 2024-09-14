import { ScreenSizes } from "@/types";
import {
    ProductsList,
    ProductsStyle,
    ProductsTop,
    ProductsTopLeft,
    ProductsTopRight,
} from "./styled";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/slices/modal.slice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import StockFilter from "../FilterElements/StockFilter";
import { Button } from "../Buttons";
import { IconFilter } from "@/icons";
import DropdownList from "../DropdownList";
import ProductCard from "../ProductCard";

export default function Products() {
    const isMedium = useMediaQuery(
        `(min-width: ${ScreenSizes.SM}) and (max-width: 1023px)`
    );
    const isMobileOut = useMediaQuery("(min-width: 576px)");
    const dispatch = useAppDispatch();

    const openFiltersModal = () => {
        dispatch(openModal({ name: "filters", data: "" }));
    };

    return (
        <ProductsStyle>
            <ProductsTop>
                {isMedium && (
                    <ProductsTopLeft>
                        <Button kind="dark" onClick={openFiltersModal}>
                            <IconFilter width="18" height="19" />
                            Filters
                        </Button>
                        <StockFilter />
                    </ProductsTopLeft>
                )}
                <ProductsTopRight>
                    {isMobileOut && <DropdownList />}
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
