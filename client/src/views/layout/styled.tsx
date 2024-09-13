import styled from "styled-components";
import { device } from "@/styles/Breakpoints";
import { MContainer } from "@/styles/Mixins";
import { ScreenSizeTypes } from "@/types";

export const LayoutStyle = styled.main`
    ${MContainer(ScreenSizeTypes.XL)}
    position: relative;
    height: 100%;
    padding: 3rem 1.5rem 1.5rem;
    @media ${device.sm} {
        padding: 4rem;
    }
`;

export const LayoutContainer = styled.main`
    width: 100%;
    max-width: 1495px;
`;
