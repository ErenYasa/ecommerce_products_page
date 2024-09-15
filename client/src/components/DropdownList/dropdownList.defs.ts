import { ChangeEvent } from "react";

export type DropdownListProps = {
    listItems: {
        text: string;
        value: string;
    }[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
