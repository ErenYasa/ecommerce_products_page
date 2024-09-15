import { ReactNode } from "react";
import { TKindTypes, TSizeTypes } from "@/types";

export type ModalProps = {
    name: string;
    className?: string;
    children: ReactNode;
    size?: TSizeTypes;
    outsideClick?: boolean;
    kind?: TKindTypes;
};
