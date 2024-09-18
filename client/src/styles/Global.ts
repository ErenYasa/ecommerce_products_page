import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/***
    The new CSS reset - version 1.8.4 (last updated 14.2.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
***/

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

* {
    -webkit-tap-highlight-color: transparent;
}

/* Remove list styles (bullets/numbers) */
ol,
ul,
menu {
    list-style: none;
}

/* For images to not be able to exceed their container */
img {
    max-inline-size: 100%;
    max-block-size: 100%;
    height: 100%;
}

/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
input,
textarea {
    user-select: auto;
    font-size: inherit;
    outline: none;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
    border: none;
    resize: none;
}

/* minimum style to allow to style meter element */
meter {
    -webkit-appearance: revert;
    appearance: revert;
}

/* preformatted text - use only for this feature */
:where(pre) {
    all: revert;
}

/* reset default text opacity of input placeholder */
::placeholder {
    color: unset;
}

/* remove default dot (•) sign */
::marker {
    content: initial;
}

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
:where([hidden]) {
    display: none;
}

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    line-break: after-white-space;
    user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
    -webkit-user-drag: element;
}

/* Revert Modal native behavior */
:where(dialog:modal) {
    all: revert;
}

i {
    display: inline-flex;
}

button {
    background-color: transparent;
    border: none;
    color: inherit;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a,
input{
    cursor: pointer;
}

button,
a {
    outline: none;
}

input,
button,
select,
optgroup,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

input[type="text"] {
    border: none;
}

input, select {
    appearance: none;
}

select {
    outline: none;
    border: none;
}

[hidden] {
    display: none !important;
}

label {
    display: block;
}

button {
    background-color: transparent;
    border: none;
}

p, span {
    text-align: left;
}

:root {
    min-width: 320px;
    font-family: 'roboto', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 62.5%;
    color: ${({ theme }) => theme.colors.dark};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation !important;
}

html,
body {
    min-height: 100%;
    width: 100%;
    font-size: 1.6rem;
}

#root {
    height: 100%;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: .5rem;
    margin-top: auto;
    padding-top: 2rem;
    .page-item {
        border: .1rem solid ${({ theme }) => theme.colors.placeholderGrey};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        &:hover, &.active {
            border-color: ${({ theme }) => theme.colors.dark};
        }
        &.disabled {
            pointer-events: none;
            opacity: .5;
        }
        
        .page-link {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5rem 1rem;
        }
    }
}
`;
