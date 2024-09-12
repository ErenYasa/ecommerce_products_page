import { ScreenSizes } from "@/types";
import {
    ProductsList,
    ProductsStyle,
    ProductsTop,
    ProductsTopLeft,
    ProductsTopRight,
} from "./styled";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import StockFilter from "../FilterElements/StockFilter";
import { ButtonPrimary } from "../Buttons";
import { IconFilter } from "@/icons";

export default function Products() {
    const isMedium = useMediaQuery(
        `(min-width: ${ScreenSizes.SM}) and (max-width: ${ScreenSizes.LG})`
    );

    return (
        <ProductsStyle>
            <ProductsTop>
                {isMedium && (
                    <ProductsTopLeft>
                        <ButtonPrimary kind="dark">
                            <IconFilter width="18" height="19" />
                            Filters
                        </ButtonPrimary>
                        <StockFilter />
                    </ProductsTopLeft>
                )}
                <ProductsTopRight>RIGHT</ProductsTopRight>
            </ProductsTop>
            <ProductsList>LIST</ProductsList>
        </ProductsStyle>
    );
}
