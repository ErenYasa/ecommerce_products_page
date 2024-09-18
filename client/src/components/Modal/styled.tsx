import { css, keyframes, styled } from "styled-components";
import { ISizeTypes, IStyleKindTypes, KindTypes, SizeTypes } from "@/types";
import { device } from "@/styles/Breakpoints";

const variantHandler = ({ $kind }: IStyleKindTypes) => {
    switch ($kind) {
        case KindTypes.SECONDARY:
            return css`
                ${CloseBtn}:hover {
                    background-color: #f5f5f5;
                    border-color: ${({ theme }) => theme.colors.secondary};
                }

                ${CloseBtn} svg {
                    fill: ${({ theme }) => theme.colors.secondary};
                }
            `;
        case KindTypes.DARK:
            return css`
                ${CloseBtn}:hover {
                    background-color: #f5f5f5;
                    border-color: ${({ theme }) => theme.colors.dark};
                }

                ${CloseBtn} svg {
                    fill: ${({ theme }) => theme.colors.dark};
                }
            `;
        default:
            return css`
                ${CloseBtn}:hover {
                    background-color: #f5f5f5;
                    border-color: ${({ theme }) => theme.colors.primary};
                }

                ${CloseBtn} svg {
                    fill: ${({ theme }) => theme.colors.primary};
                }
            `;
    }
};

const fadeInTopModal = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10rem);
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalStyle = styled.div<ISizeTypes>`
    opacity: 0;
    overflow-y: auto;
    position: relative;
    width: 100%;
    min-width: auto;
    max-height: 90%;
    padding: 2.4rem 2rem 2rem 2rem;
    border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 2rem 10rem 0 #00000045;
    background-color: ${({ theme }) => theme.colors.light};
    animation: ${fadeInTopModal} 0.3s ease forwards;

    @media ${device.sm} {
        max-width: ${({ size }) => {
            if (size === SizeTypes.SM) return "40rem";
            if (size === SizeTypes.LG) return "76rem";

            return "55rem";
        }};
        max-height: calc(100% - 14rem);
        margin-top: 7.5rem;
        padding: 2.8rem 2.8rem 4.3rem;
        border-radius: ${({ theme }) => theme.borderRadius.md};
    }
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    min-height: 0.1rem;
    height: 4rem;
`;

export const CloseBtn = styled.button.attrs({ type: "button" })`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid transparent;
    border-radius: 0.6rem;
    box-shadow: 0 0 1.5rem 0 #00000015;
    background-color: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
`;

export const ModalWrapper = styled.div<IStyleKindTypes>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow-x: hidden;
    transition: all 0.3s ease;
    will-change: backdrop-filter, background;
    ${variantHandler}

    @media ${device.sm} {
        align-items: flex-start;
    }

    &.open {
        background: rgba(0, 0, 0, 0.2);
    }

    /**
 * CUSTOM CLASSES
 */
    &.sorting-modal {
        @media (max-width: 576px) {
            align-items: center;

            ${ModalStyle} {
                max-width: 80%;
                border-bottom-left-radius: ${({ theme }) =>
                    theme.borderRadius.lg};
                border-bottom-right-radius: ${({ theme }) =>
                    theme.borderRadius.lg};
            }
        }
    }

    &.filters-modal {
        @media (max-width: 576px) {
            ${ModalStyle} {
                min-height: 90%;
            }
        }
    }
    /*  */
`;
