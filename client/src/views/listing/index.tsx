import { Breadcrumb } from "@/components/Breadcrumb";
import { MobileFilter } from "@/components/MobileFilter";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Fragment } from "react";

export default function Listing() {
    const isMobile = useMediaQuery();

    return (
        <Fragment>
            <Breadcrumb />
            {isMobile && <MobileFilter />}
        </Fragment>
    );
}
