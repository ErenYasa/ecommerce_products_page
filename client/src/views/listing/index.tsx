import { Fragment } from "react/jsx-runtime";
import { ListingStyle } from "./styled";
import { useGetProductsQuery } from "@/services/product";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ScreenSizes } from "@/types";
import { MobileFilterButtons } from "@/components/MobileFilter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SidebarFilter } from "@/components/SidebarFilter";
import { Products } from "@/components/Products";
import RotationLoader from "@/components/Loader";

export default function Listing() {
    const isMobile = useMediaQuery();
    const isLargeScreen = useMediaQuery(`(min-width: ${ScreenSizes.LG})`);

    const { isFetching } = useGetProductsQuery("");

    return (
        <Fragment>
            {!isFetching ? (
                <>
                    <Breadcrumb />
                    {isMobile && <MobileFilterButtons />}
                    <ListingStyle>
                        {isLargeScreen && <SidebarFilter />}
                        <Products />
                    </ListingStyle>
                </>
            ) : (
                <RotationLoader />
            )}
        </Fragment>
    );
}
