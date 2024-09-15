import { Container, FilterButton, MobileFilterStyle } from "./styled";
import { IconFilter, IconSort } from "@/icons";
import { openModal } from "@/store/slices/modal.slice";
import { ModalNames } from "@/types";
import { useAppDispatch } from "@/store/hooks";

export function MobileFilterButtons() {
    const dispatch = useAppDispatch();

    const openFiltersModal = () => {
        dispatch(openModal({ name: ModalNames.FILTERS, data: "" }));
    };

    const openSortingModal = () => {
        dispatch(openModal({ name: ModalNames.SORTING, data: "" }));
    };

    return (
        <MobileFilterStyle>
            <Container>
                <FilterButton onClick={openFiltersModal}>
                    <IconFilter width="18" height="19" />
                    Filters
                </FilterButton>
                <FilterButton onClick={openSortingModal}>
                    <IconSort width="17" height="17" />
                    Sorting
                </FilterButton>
            </Container>
        </MobileFilterStyle>
    );
}
