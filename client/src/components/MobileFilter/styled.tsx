import styled from "styled-components";

export const MobileFilterStyle = styled.div`
    position: sticky;
    top: 0;
    margin-top: 2rem;
    margin-inline: -1.5rem;
    padding: 1rem 1.5rem;
    background-color: ${(props) => props.theme.colors.light};
`;

export const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.secondaryGrey};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    /* border-bottom: 0.1rem solid ${(props) =>
        props.theme.colors.primaryGrey}; */
`;

export const FilterButton = styled.button`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    width: 50%;
    padding: 1.5rem;
    &:last-child {
        &::before {
            content: "";
            display: block;
            height: 2.5rem;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 0.1rem;
            background-color: ${(props) => props.theme.colors.placeholderGrey};
        }
    }
`;
