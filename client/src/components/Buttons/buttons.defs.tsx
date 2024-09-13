import { MouseEvent, ReactNode } from "react";
import { IVariantAndKindTypes } from "@/types";

/**
 * FOR COMPONENT
 */
export interface ButtonProps extends IVariantAndKindTypes {
    children: ReactNode;
    disabled?: boolean;
    fullwidth?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
/*  */

/**
 * FOR STYLES
 */
export interface IbuttonStyle extends IVariantAndKindTypes {
    fullwidth?: string;
}
/*  */
