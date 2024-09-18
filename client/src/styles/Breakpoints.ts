interface Size {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

const size: Size = {
    xs: "0", // for small screen mobile
    sm: "576px", // for mobile screen
    md: "768px", // for tablets
    lg: "1024px", // for laptops
    xl: "1280px", // for desktop / monitors
    xxl: "1536px", // for big screens
};

export const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
};
