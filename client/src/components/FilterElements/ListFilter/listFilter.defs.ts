import { ReactElement } from "react";

export interface ListFilterProps {
    open?: boolean;
    alwaysopen?: boolean;
    className?: string;
    title: string;
    children: ReactElement;
}
