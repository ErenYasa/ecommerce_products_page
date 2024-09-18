import { styled } from "styled-components";

export const ProductCountStyle = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 0.4rem;
    width: max-content;
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.typography.weight.light};
`;

export const Count = styled.p`
    display: inline;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
`;
