import { LayoutStyle } from "./styled";
import Listing from "../listing";
import { Button } from "@/components/Buttons";
import { Modal } from "@/components/Modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ModalNames } from "@/types";
import { openModal } from "@/store/slices/modal.slice";

export default function Layout() {
    const modals = useAppSelector((state) => state.Modal.modals);

    const dispatch = useAppDispatch();

    const open = () => {
        dispatch(openModal({ name: ModalNames.SORTING, data: "" }));
    };

    return (
        <>
            <Button kind="dark" onClick={open}>
                OPEN MODAL
            </Button>
            <LayoutStyle>
                <Listing />
            </LayoutStyle>
            {modals[ModalNames.FILTERS] && (
                <Modal name="filters" kind="dark">
                    TEST MODAL
                </Modal>
            )}
            {modals[ModalNames.SORTING] && (
                <Modal name="sorting" kind="dark">
                    TEST MODAL
                </Modal>
            )}
        </>
    );
}
