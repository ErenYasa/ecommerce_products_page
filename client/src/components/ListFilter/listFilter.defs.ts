import { ReactElement } from "react";

export interface ListFilterProps {
    open?: boolean;
    className?: string;
    title: string;
    children: ReactElement;
}
