import { TKindTypes } from "@/types";

export type CheckboxProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    text?: string;
    textOrder?: "before" | "after";
    kind?: "primary" | "secondary" | "dark";
    size?: "std" | "lg";
};

/**
 * FOR STYLE
 */
export interface CheckboxStyle {
    $kind?: TKindTypes;
    $size: "std" | "lg";
    $order: string;
}
