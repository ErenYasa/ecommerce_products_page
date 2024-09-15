import styled, { css } from "styled-components";
import { IKindTypesAndTheme, KindTypes } from "@/types";
import { CheckboxStyle } from "./Checkbox.defs";

const variantHandler = ({ $kind, theme }: IKindTypesAndTheme) => css`
    &:hover {
        ${Checkmark} {
            border-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
        }
    }

    ${Input}:checked ~ ${Checkmark} {
        background-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
        border: 0.1rem solid ${theme.colors[$kind || KindTypes.PRIMARY]};
    }

    &.disabled {
        pointer-events: none;

        cursor: not-allowed;

        ${Input} ~ ${Checkmark} {
            opacity: 0.5;
            background-color: ${theme.colors.secondaryGrey};
            border-color: ${theme.colors.primaryGrey};
        }

        ${Input}:checked ~ ${Checkmark} {
            opacity: 0.5;
            background-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
            border: 0.1rem solid ${theme.colors[$kind || KindTypes.PRIMARY]};
        }

        ${Text} {
            opacity: 0.3;
        }
    }
`;

export const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${(props) => props.theme.colors.primaryGrey};
    border-radius: ${(props) => props.theme.borderRadius.xs};
    cursor: pointer;

    &:after {
        content: "";
        position: absolute;
        left: 0.6rem;
        top: 0.1rem;
        display: none;
        width: 0.7rem;
        height: 1.3rem;
        border: solid ${(props) => props.theme.colors.light};
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
    }
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
    &:checked ~ ${Checkmark}:after {
        display: block;
    }
`;

export const Label = styled.label<CheckboxStyle>`
    position: relative;
    display: flex;
    align-items: center;
    max-width: fit-content;
    min-height: 2rem;
    padding-left: 3.4rem;
    font-size: ${(props) => props.theme.typography.size.xs};
    font-weight: ${(props) => props.theme.typography.weight.light};
    cursor: pointer;
    ${variantHandler}

    ${({ $order }) => {
        if ($order === "after") {
            return css`
                max-width: 100%;
                width: 100%;
                padding-left: 0;
                padding-right: 0;

                ${Checkmark} {
                    left: unset;
                    right: 0;
                }
            `;
        }
        return false;
    }}
  

  ${({ theme, $size }) => {
        if ($size === "lg") {
            return css`
                min-height: 3rem;
                font-size: ${theme.typography.size.sm};
                font-weight: ${theme.typography.weight.regular};

                ${Checkmark} {
                    width: 3rem;
                    height: 3rem;

                    &:after {
                        top: 0.1rem;
                        left: 0.9rem;
                        width: 1rem;
                        height: 2rem;
                    }
                }
            `;
        }

        return "10px";
    }};
`;

export const Text = styled.p`
    user-select: none;
`;
