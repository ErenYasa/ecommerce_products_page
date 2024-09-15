import { styled } from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.darkGreyText};
    cursor: pointer;
`;

export const Input = styled.input`
    appearance: none;
    display: inline-grid;
    place-content: center;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0;
    font: inherit;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.switchBg};
    border: 0.2rem solid currentColor;
    border-radius: 50%;

    &:checked {
        color: black;
    }

    &:before {
        content: "";
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.1s transform ease;
        box-shadow: inset 1rem 1rem currentColor;
        background: currentColor;
    }

    &:checked::before {
        transform: scale(1);
    }
`;

export const Text = styled.span<{ order: string }>`
    ${({ order }) => order === "before" && "order: -1"};
`;
