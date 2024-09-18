import { css, styled } from "styled-components";
import { IStyleGlobalVariantHandler, KindTypes, VariantTypes } from "@/types";
import { IButtonStyle } from "./buttons.defs";

const variantHandler = ({
    $variant,
    $kind,
    theme,
}: IStyleGlobalVariantHandler) => {
    switch ($variant) {
        case VariantTypes.OUTLINE:
            return css`
                background-color: transparent;
                color: ${theme.colors[$kind || KindTypes.PRIMARY]};
                border-color: ${theme.colors[$kind || KindTypes.PRIMARY]};

                &:hover {
                    background-color: ${theme.colors[
                        $kind || KindTypes.PRIMARY
                    ]};
                    color: ${theme.colors.light};
                }
            `;
        case VariantTypes.GHOST:
            return css`
                background-color: transparent;
                color: ${theme.colors[$kind || KindTypes.PRIMARY]};
                border-color: transparent;

                &:hover {
                    background-color: ${theme.colors.secondaryGrey};
                }
            `;
        default:
            return css`
                background-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
                color: ${theme.colors[
                    $kind === KindTypes.SECONDARY ? KindTypes.PRIMARY : "light"
                ]};
                border-color: ${theme.colors[$kind || KindTypes.PRIMARY]};

                &:hover {
                    background-color: ${theme.colors[
                            $kind || KindTypes.PRIMARY
                        ]}${theme.opacityCodes["80%"]};
                    border-color: transparent;
                    ${$kind === KindTypes.SECONDARY && `opacity: 0.9;`};
                }
            `;
    }
};

export const ButtonStyle = styled.button<IButtonStyle>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: max-content;
    padding: 0.8rem 1.6rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    ${variantHandler}

    ${(props) => props.$fullwidth && `width: 100%;`};

    &[disabled] {
        pointer-events: none;
        user-select: none;
        opacity: 0.5;
        cursor: not-allowed;
        ${(props) => props.$kind === KindTypes.SECONDARY && `opacity: 0.7;`};
    }
`;
