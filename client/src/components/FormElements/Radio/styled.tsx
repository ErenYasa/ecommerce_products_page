import { styled } from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #6b7280;
    cursor: pointer;
`;

export const Input = styled.input`
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #8b92a1;
    border: 0.2rem solid currentColor;
    display: inline-grid;
    place-content: center;
    width: 2.4rem;
    height: 2.4rem;
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
