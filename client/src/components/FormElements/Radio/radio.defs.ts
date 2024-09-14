import { TKindTypes } from "@/types";
import { ChangeEvent } from "react";

export type RadioProps = {
    name: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
    text?: string;
    size?: "sm" | "md" | "lg";
    checked?: boolean;
    kind?: TKindTypes;
    textOrder?: "before" | "after";
};
