import { useState } from "react";
import { LayoutStyle } from "./styled";
import Listing from "../listing";
import { Button } from "@/components/Buttons";
import { Modal } from "@/components/Modal";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button kind="dark" onClick={toggle}>
                OPEN MODAL
            </Button>
            <LayoutStyle>
                <Listing />
            </LayoutStyle>
            <Modal isOpen={isOpen} toggle={toggle}>
                TEST MODAL
            </Modal>
        </>
    );
}
