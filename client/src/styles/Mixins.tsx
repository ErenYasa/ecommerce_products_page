import { css } from "styled-components";
import { ScreenSizeTypes } from "@/types";
import { theme } from "./Theme";

export const MContainer = (size: ScreenSizeTypes) => css`
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

export const MLineclamp = (lines?: number, lineHeight?: boolean) => css`
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-line-clamp: ${lines || 2};
    line-clamp: ${lines || 2};
    overflow: hidden;
    text-overflow: ellipsis;
    ${() => {
        if (lineHeight || false)
            return `max-height: ${lineHeight || 2} * ${lines || 2} * 1px;`;
    }}
`;

export const MLineHeight = (fontSize: number, lineHeightPx: number) => css`
    line-height: ${lineHeightPx / fontSize};
`;

export const MVisuallyHidden = css`
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
    &:not(caption) {
        position: absolute !important;
    }
`;
