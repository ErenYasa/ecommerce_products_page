import { SidebarFilterStyle, Top } from "./styled";
import ListFilter from "../FilterElements/ListFilter";
import CheckboxList from "../CheckboxList";
import StockFilter from "../FilterElements/StockFilter";

const BRANDS = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
    "Brand 8",
    "Brand 9",
    "Brand 10",
];

export function SidebarFilter() {
    return (
        <SidebarFilterStyle>
            <Top>
                <StockFilter />
            </Top>
            {BRANDS.length > 0 && (
                <ListFilter open title="Brands">
                    <CheckboxList data={BRANDS} />
                </ListFilter>
            )}
            <ListFilter title="Colors">
                <>
                    <div>Color 1</div>
                    <div>Color 2</div>
                    <div>Color 3</div>
                    <div>Color 4</div>
                    <div>Color 5</div>
                </>
            </ListFilter>
        </SidebarFilterStyle>
    );
}
