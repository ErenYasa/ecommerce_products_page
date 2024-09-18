import { SidebarFilterStyle, Top } from "./styled";
import { useAppSelector } from "@/store/hooks";
import ListFilter from "../FilterElements/ListFilter";
import CheckboxList from "../CheckboxList";
import StockFilter from "../FilterElements/StockFilter";

export function SidebarFilter() {
    const { brand, color } = useAppSelector((state) => state.App.filterItems);

    return (
        <SidebarFilterStyle>
            <Top>
                <StockFilter />
            </Top>
            {brand.length > 0 && (
                <ListFilter open title="Brands">
                    <CheckboxList data={brand} checkboxName="brand" />
                </ListFilter>
            )}
            {color.length > 0 && (
                <ListFilter open title="Colors">
                    <CheckboxList data={color} checkboxName="color" />
                </ListFilter>
            )}
        </SidebarFilterStyle>
    );
}
