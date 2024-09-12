import { css } from "styled-components";
import { SizeTypes } from "@/types";
import { theme } from "./Theme";

export const MContainer = (size: SizeTypes) => css`
    width: 100%;
    max-width: ${theme.containerMaxWidths[size]};
    margin-inline: auto;
`;

export const MContainerClass = css`
    width: 100%;
    max-width: ${theme.containerMaxWidths.xxl};
    margin-inline: auto;
`;

export const MContainerFluid = css`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    margin-inline: auto;
`;

export const MRow = css`
    display: flex;
    flex-flow: row wrap;
`;

/* grid columns */
export const MColumn = (val: number) => css`
    flex-grow: 0;
    width: ${(val * 100) / theme.gridColumns}%;
`;

/* grid gaps */
export const MGridGaps = (gap: 0 | 1 | 2 | 3) => css`
    margin-inline: -${theme.gridGaps[gap]};

    > * {
        padding: ${theme.gridGaps[gap]};
    }
`;
