import { css, styled } from "styled-components";
import { IKindTypesAndSize, IKindTypesAndTheme, KindTypes } from "@/types";

const variantHandler = ({ $kind, theme }: IKindTypesAndTheme) => css`
    ${Input}:checked + ${Slider} {
        background-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.5;
        cursor: not-allowed;

        ${Input}:checked + ${Slider} {
            background-color: ${theme.colors[$kind || KindTypes.PRIMARY]};
        }
    }
`;

export const Slider = styled.span`
    flex: 0 0 auto;
    position: relative;
    display: inline-block;
    width: 4.8em;
    height: 2.6em;
    border-radius: 1.6em;
    background: ${({ theme }) => theme.colors.switchBg};
    transition: background 0.25s;
    &:before,
    &:after {
        content: "";
    }
    &:before {
        position: absolute;
        top: 0.3em;
        left: 0.3em;
        display: block;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.light};
        transition: left 0.25s;
    }
`;

export const Input = styled.input`
    visibility: hidden;
    position: absolute;
    &:checked + ${Slider}:before {
        left: 2.5em;
    }
`;

export const Text = styled.p`
    position: relative;
    user-select: none;
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const Label = styled.label<IKindTypesAndSize>`
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: ${(props) => {
        if (props.size === "sm") return "7px";
        if (props.size === "md") return "8px";
        if (props.size === "lg") return "12px";
        return "10px";
    }};
    cursor: pointer;
    ${variantHandler}
`;
