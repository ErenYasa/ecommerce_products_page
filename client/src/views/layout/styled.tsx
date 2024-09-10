import styled from "styled-components";
import { device } from "@/styles/Breakpoints";
import { MContainerClass } from "@/styles/Mixins";

export const LayoutStyle = styled.main`
    ${MContainerClass}
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
