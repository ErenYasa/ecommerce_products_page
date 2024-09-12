import { Fragment } from "react/jsx-runtime";
import { ListingStyle } from "./styled";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ScreenSizes } from "@/types";
import { MobileFilter } from "@/components/MobileFilter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SidebarFilter } from "@/components/SidebarFilter";
import Products from "@/components/Products";

export default function Listing() {
    const isMobile = useMediaQuery();
    const isLargeScreen = useMediaQuery(`(min-width: ${ScreenSizes.LG})`);

    return (
        <Fragment>
            <Breadcrumb />
            {isMobile && <MobileFilter />}
            <ListingStyle>
                {isLargeScreen && <SidebarFilter />}
                <Products />
            </ListingStyle>
        </Fragment>
    );
}
