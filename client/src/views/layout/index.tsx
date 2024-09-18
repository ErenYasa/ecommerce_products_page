import { LayoutStyle } from "./styled";
import { useAppSelector } from "@/store/hooks";
import Listing from "../listing";
import { ModalNames, SizeTypes } from "@/types";
import { Modal } from "@/components/Modal";
import FiltersModal from "@/components/Modal/Modals/Filters";
import SortingModal from "@/components/Modal/Modals/Sorting";

export default function Layout() {
    const modals = useAppSelector((state) => state.Modal.modals);

    return (
        <>
            <LayoutStyle>
                <Listing />
            </LayoutStyle>
            {modals[ModalNames.FILTERS] && (
                <Modal name="filters" kind="dark" className="filters-modal">
                    <FiltersModal />
                </Modal>
            )}
            {modals[ModalNames.SORTING] && (
                <Modal
                    name="sorting"
                    kind="dark"
                    size={SizeTypes.SM}
                    className="sorting-modal"
                >
                    <SortingModal />
                </Modal>
            )}
        </>
    );
}
