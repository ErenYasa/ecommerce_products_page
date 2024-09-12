import { ReactNode } from "react";
import { IVariantAndKindTypes } from "@/types";

export interface ButtonProps extends IVariantAndKindTypes {
    children: ReactNode;
    disabled?: boolean;
}
