import { styled } from "styled-components";

export const ListFilterStyle = styled.details`
    padding-block: 1.5rem;
`;

export const Title = styled.summary`
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    margin-bottom: 1rem;
    list-style: none;
    cursor: pointer;
    &::-webkit-details-marker {
        display: none;
    }
    & svg {
    }
`;

export const TitleText = styled.p``;

export const Body = styled.div``;
