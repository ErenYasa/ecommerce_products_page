import styled from "styled-components";

export const SidebarFilterStyle = styled.aside`
    position: sticky;
    top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 237px);

    & > *:not(:last-child) {
        border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primaryGrey};
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1rem;
`;
