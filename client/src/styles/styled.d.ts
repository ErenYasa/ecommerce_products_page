import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            dark: string;
            light: string;
            textLight: string;
            secondaryGrey: string;
            primaryGrey: string;
            placeholderGrey: string;
            switchBg: string;
            darkGreyText: string;
            success: string;
            error: string;
        };
        opacityCodes: {
            "90%": string;
            "80%": string;
            "70%": string;
            "60%": string;
            "50%": string;
            "40%": string;
            "20%": string;
        };
        typography: {
            size: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
            };
            weight: {
                light: number;
                regular: number;
                medium: number;
                bold: number;
            };
        };
        borderRadius: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        containerMaxWidths: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        gridBreakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        gridColumns: 12;
        gridGaps: {
            0: string;
            1: string;
            2: string;
            3: string;
        };
    }
}
