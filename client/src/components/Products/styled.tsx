import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const ProductsStyle = styled.main`
    width: 100%;
`;

export const ProductsTop = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
`;

export const ProductsTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const ProductsTopRight = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.3rem;
    margin-top: 0;

    @media ${device.sm} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: 3rem;
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media ${device.lg} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
    }

    @media (min-width: 1152px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;
