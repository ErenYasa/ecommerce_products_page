import { styled } from "styled-components";

export const ProductCountStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    width: max-content;
    padding-bottom: 0.6rem;
    font-size: ${({ theme }) => theme.typography.size.xs};
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 0.1rem;
        width: 10rem;
        background: #dedede;
        transform: translateX(-50%);
    }
`;

export const Count = styled.p`
    display: inline;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
`;
