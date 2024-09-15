import { useEffect } from "react";
import { isInitFilter, updateFilter } from "@/helpers/filterHelpers";
import { StockFilterStyle } from "./styled";
import { useAppSelector } from "@/store/hooks";
import Switch from "@/components/FormElements/Switch";

export default function StockFilter() {
    const { activeFilters } = useAppSelector((state) => state.App);

    /* show only in-stock items initially */
    let flag = true;
    useEffect(() => {
        if (flag) {
            isInitFilter("stock", "off");
            flag = false;
        }
    }, [flag]);
    /*  */

    // console.log('ac', activeFilters.stock === 'on');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        updateFilter(name, value, !checked);
    };
    return (
        <StockFilterStyle>
            <Switch
                name="stock"
                kind="dark"
                text="Only in-stock items:"
                onChange={onChangeHandler}
                defaultChecked={isInitFilter("stock", "on")}
            />
        </StockFilterStyle>
    );
}
