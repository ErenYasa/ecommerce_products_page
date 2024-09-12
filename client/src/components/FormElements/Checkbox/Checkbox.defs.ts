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
    kind?: "primary" | "secondary" | "dark";
};
