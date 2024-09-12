import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            dark: string;
            light: string;
            textLight: string;
            SecondaryGrey: string;
            primaryGrey: string;
            placeholderGrey: string;
            darkGreyText: string;
            success: string;
            error: string;
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
        paddings: {
            container: string;
            pageTop: string;
        };
        margins: {
            pageTop: string;
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
