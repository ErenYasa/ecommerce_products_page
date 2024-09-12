import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-block: 1.6rem;
    font-size: ${(props) => props.theme.typography.size.lg};
    box-shadow: 0 0.1rem ${(props) => props.theme.colors.primaryGrey};
`;
