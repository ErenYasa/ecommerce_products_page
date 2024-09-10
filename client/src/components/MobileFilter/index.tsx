import { Container, FilterButton, MobileFilterStyle } from "./styled";
import { IconFilter, IconSort } from "@/icons";

export function MobileFilter() {
    return (
        <MobileFilterStyle>
            <Container>
                <FilterButton>
                    <IconFilter width="18" height="19" />
                    Filters
                </FilterButton>
                <FilterButton>
                    <IconSort width="17" height="17" />
                    Sorting
                </FilterButton>
            </Container>
        </MobileFilterStyle>
    );
}
