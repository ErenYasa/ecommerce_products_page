import styled, { css } from "styled-components";
import { IKindTypes, IKindTypesAndTheme, KindTypes } from "@/types";

const variantHandler = ({ kind, theme }: IKindTypesAndTheme) => css`
    &:hover {
        ${Checkmark} {
            border-color: ${theme.colors[kind || KindTypes.PRIMARY]};
        }
    }
    ${Input}:checked ~ ${Checkmark} {
        background-color: ${theme.colors[kind || KindTypes.PRIMARY]};
        border: 0.1rem solid ${theme.colors[kind || KindTypes.PRIMARY]};
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
            background-color: ${theme.colors[kind || KindTypes.PRIMARY]};
            border: 0.1rem solid ${theme.colors[kind || KindTypes.PRIMARY]};
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
    appearance: none;
    outline: 0;
    &:checked ~ ${Checkmark}:after {
        display: block;
    }
`;

export const Label = styled.label<IKindTypes>`
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
`;

export const Text = styled.p`
    user-select: none;
`;
