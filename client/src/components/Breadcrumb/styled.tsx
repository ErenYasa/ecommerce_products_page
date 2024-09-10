import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
    display: flex;
    gap: 0.7rem;
    font-size: ${(props) => props.theme.typography.size.xs};
`;

export const Item = styled.span``;

export const ItemLink = styled.a<{ active: boolean }>`
    pointer-events: ${(props) => props.active && "none"};
    font-weight: ${(props) =>
        props.active && props.theme.typography.weight.medium};
    &:hover {
        text-decoration: underline;
    }
`;

export const Separator = styled.span`
    margin-right: 0.7rem;
`;
