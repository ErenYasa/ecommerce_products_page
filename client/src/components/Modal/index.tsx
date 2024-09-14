import { createPortal } from "react-dom";
import { useRef } from "react";
import classNames from "classnames";
import { CloseBtn, Header, ModalStyle, ModalWrapper } from "./styled";
import { IModalProps } from "./modal.defs";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useLockBodyScroll } from "@/hooks/useBodyScroll";
import { SizeTypes } from "@/types";
import { IconClose } from "@/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/modal.slice";

export const Modal = ({
    name,
    className,
    children,
    size,
    kind,
    outsideClick = true,
}: IModalProps) => {
    const isOpen = useAppSelector((state) => state.Modal.modals[name]);
    const dispatch = useAppDispatch();
    const modalRef = useRef<HTMLDivElement>(null);

    const close = () => {
        dispatch(closeModal({ name }));
    };

    useOutsideClick(modalRef, close, outsideClick);
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    const classes = classNames(className, {
        open: isOpen,
    });

    return createPortal(
        <>
            <ModalWrapper className={classes} kind={kind}>
                <ModalStyle ref={modalRef} size={size || SizeTypes.STD}>
                    <Header>
                        <CloseBtn onClick={close}>
                            <IconClose width="1.8rem" height="1.8rem" />
                        </CloseBtn>
                    </Header>
                    {children}
                </ModalStyle>
            </ModalWrapper>
        </>,
        document.body
    );
};
