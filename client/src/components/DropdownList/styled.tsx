import { styled } from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 17rem;
    height: 3.5rem;
    padding-inline: 1rem;
    border-radius: ${(props) => props.theme.borderRadius.sm};
    border: 0.1rem solid ${(props) => props.theme.colors.switchBg};
`;

export const Holder = styled.span``;

export const List = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-block: 0.5rem;
    padding-inline: 1rem 3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: transparent;
    cursor: pointer;
`;

export const ListItem = styled.option``;
