import { styled } from "styled-components";

export const Title = styled.summary`
    position: relative;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    list-style: none;
    cursor: pointer;

    &::-webkit-details-marker {
        display: none;
    }

    & svg {
    }
`;

export const ListFilterStyle = styled.details<{ alwaysopen: string }>`
    padding-block: 1.5rem;

    ${Title} {
        ${({ alwaysopen }) => alwaysopen === "true" && "pointer-events: none;"}
    }

    &[open] {
        ${Title} {
            svg {
                transform: rotate(-180deg);
            }
        }
    }
`;

export const TitleText = styled.p``;

export const Body = styled.div`
    margin-top: 1rem;
`;
