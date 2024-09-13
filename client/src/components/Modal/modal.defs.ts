import { ReactNode } from "react";
import { TKindTypes, ScreenSizeTypes } from "@/types";

export interface IModalProps {
    children: ReactNode;
    size?: ScreenSizeTypes;
    outsideClick?: boolean;
    isOpen: boolean;
    toggle: () => void;
    kind?: TKindTypes;
}
