import styled from "styled-components";
import { device } from "@/styles/Breakpoints";

export const ListingStyle = styled.div`
    display: grid;
    gap: 2rem;
    margin-top: 3rem;
    @media ${device.sm} {
        grid-template-columns: 1fr;
    }
    @media ${device.lg} {
        grid-template-columns: 20rem 1fr;
    }
`;
