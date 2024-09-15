import { ChangeEvent } from "react";
import { SizeTypes, TKindTypes } from "@/types";

export type CheckboxProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
    text?: string;
    size?: SizeTypes;
    checked?: boolean;
    kind?: TKindTypes;
};
