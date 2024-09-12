import styled from "styled-components";

export const SidebarFilterStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-inline: 1rem;
    & > *:not(:last-child) {
        box-shadow: 0 0.1rem ${({ theme }) => theme.colors.primaryGrey};
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1rem;
`;

export const StockFilter = styled.div``;
