import { DefaultTheme } from "styled-components";

/**
 * ENUMS
 */
export enum ScreenSizes {
    SM = "576px",
    MD = "768px",
    LG = "1024px",
    XL = "1280px",
    XXL = "1536px",
}

export enum SizeTypes {
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
    XXL = "xxl",
}

export enum VariantTypes {
    DEFAULT = "default",
    OUTLINE = "outline",
    GHOST = "ghost",
}

export enum KindTypes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DARK = "dark",
}
/*  */

/**
 * INTERFACES
 */
export interface IVariantTypes {
    variant?: "default" | "outline" | "ghost";
}

export interface IKindTypes {
    kind?: "primary" | "secondary" | "dark";
}

export interface IVariantAndKindTypes extends IVariantTypes, IKindTypes {}

export interface IGlobalVariantHandler extends IVariantTypes, IKindTypes {
    theme: DefaultTheme;
}

export interface IKindTypesAndTheme extends IKindTypes {
    theme: DefaultTheme;
}

export interface IKindTypesAndSize extends IKindTypes {
    size?: string;
}
/*  */

/**
 * TYPES
 */
export type TKindTypes = "primary" | "secondary" | "dark";
/*  */
