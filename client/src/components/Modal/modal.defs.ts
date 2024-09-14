import { ReactNode } from "react";
import { TKindTypes, TSizeTypes } from "@/types";

export interface IModalProps {
    name: string;
    className?: string;
    children: ReactNode;
    size?: TSizeTypes;
    outsideClick?: boolean;
    kind?: TKindTypes;
}
