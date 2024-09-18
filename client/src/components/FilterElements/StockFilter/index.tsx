import { ChangeEvent } from "react";
import { StockFilterStyle } from "./styled";
import { updateFilter } from "@/helpers/filterHelpers";
import { useAppSelector } from "@/store/hooks";
import Switch from "@/components/FormElements/Switch";

export default function StockFilter() {
    const { activeFilters } = useAppSelector((state) => state.App);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
                checked={activeFilters.stock === "on"}
            />
        </StockFilterStyle>
    );
}
