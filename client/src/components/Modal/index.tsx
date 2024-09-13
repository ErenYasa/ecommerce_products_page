import { createPortal } from "react-dom";
import { useRef } from "react";
import classNames from "classnames";
import { CloseBtn, Header, ModalStyle, ModalWrapper } from "./styled";
import { IModalProps } from "./modal.defs";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useLockBodyScroll } from "@/hooks/useBodyScroll";
import { ScreenSizeTypes } from "@/types";
import { IconClose } from "@/icons";

export const Modal = ({
    children,
    size,
    isOpen,
    toggle,
    kind,
    outsideClick = true,
}: IModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const close = () => {
        toggle();
    };

    useOutsideClick(modalRef, close, outsideClick);
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    const classes = classNames({
        open: isOpen,
        // [className]: className,
    });

    return createPortal(
        <ModalWrapper className={classes} kind={kind}>
            <ModalStyle ref={modalRef} size={size || ScreenSizeTypes.STD}>
                <Header>
                    <CloseBtn onClick={close}>
                        <IconClose width="1.8rem" height="1.8rem" />
                    </CloseBtn>
                </Header>
                {children}
            </ModalStyle>
        </ModalWrapper>,
        document.body
    );
};
