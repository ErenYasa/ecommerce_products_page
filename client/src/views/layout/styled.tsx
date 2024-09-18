import styled from "styled-components";
import { device } from "@/styles/Breakpoints";
import { MContainer } from "@/styles/Mixins";
import { ScreenSizeTypes } from "@/types";

export const LayoutStyle = styled.main`
    ${MContainer(ScreenSizeTypes.XL)}
    position: relative;
    padding: 3rem 1.5rem;

    @media ${device.sm} {
        padding: 4rem 4rem 6rem;
    }
`;

export const LayoutContainer = styled.main`
    width: 100%;
    max-width: 1495px;
`;
