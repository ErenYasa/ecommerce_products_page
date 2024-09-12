import { SidebarFilterStyle, StockFilter, Top } from "./styled";
import ListFilter from "../ListFilter";

export function SidebarFilter() {
    return (
        <SidebarFilterStyle>
            <Top>
                <StockFilter>Hide out of stock items</StockFilter>
            </Top>
            <ListFilter open title="Brands">
                <>
                    <div>Brand 1</div>
                    <div>Brand 2</div>
                    <div>Brand 3</div>
                    <div>Brand 4</div>
                    <div>Brand 5</div>
                </>
            </ListFilter>
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
