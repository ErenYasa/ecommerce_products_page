import { css } from "styled-components";

/* @mixin container {
    width: 100%;
    max-width: map-get($grid-breakpoints, "xxl");
    margin-inline: auto;
}
@mixin containerClass($size) {
    width: 100%;
    max-width: map-get($container-max-widths, $size);
    margin-inline: auto;
} */

export const MContainerClass = css`
    width: 100%;
    max-width: ${(props) => props.theme.containerMaxWidths.xxl};
    margin-inline: auto;
`;

/* @mixin containerFluid {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    margin-inline: auto;
}
@mixin row {
    display: flex;
    flex-flow: row wrap;
}
 */
/* grid columns */
// @mixin column($val) {
//     flex-grow: 0;
//     width: math.div($val * 100%, $grid-columns);
// }

// /* grid gaps */
// @mixin gridGaps($gap) {
//     margin-inline: -(map-get($grid-gaps, $gap));

//     > * {
//         padding: map-get($grid-gaps, $gap);
//     }
// }
