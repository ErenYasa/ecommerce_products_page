import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: "#5D3EBC",
        secondary: "#FFD10B",
        dark: "#000000",
        light: "#FFFFFF",
        textLight: "#818181",
        primaryGrey: "#DEDEDE",
        secondaryGrey: "#F4F4F4",
        placeholderGrey: "#D9D9D9",
        switchBg: "#CCCCCC",
        darkGreyText: "#303030",
        success: "#66A15A",
        error: "#9F0000",
    },
    opacityCodes: {
        "90%": "E6",
        "80%": "CC",
        "70%": "B3",
        "60%": "99",
        "50%": "80",
        "40%": "66",
        "20%": "33",
    },
    typography: {
        size: {
            xs: "1.3rem",
            sm: "1.6rem",
            md: "1.8rem",
            lg: "2.4rem",
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
        },
    },
    borderRadius: {
        xs: "0.3rem",
        sm: "0.5rem",
        md: "0.8rem",
        lg: "1.2rem",
    },
    containerMaxWidths: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
    },
    gridBreakpoints: {
        xs: "0",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
    },
    gridColumns: 12,
    gridGaps: {
        0: "0",
        1: "1rem",
        2: "2rem",
        3: "3rem",
    },
};
