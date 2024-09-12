import { Checkmark, Input, Label, Text } from "./styled";
import classnames from "classnames";
import { KindTypes, TKindTypes } from "@/types";

type CheckboxProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
    text?: string;
    kind?: TKindTypes;
    checked?: boolean;
};

export default function Checkbox(props: CheckboxProps) {
    const classes = classnames({
        disabled: props.disabled,
    });

    return (
        <Label kind={props.kind || KindTypes.PRIMARY} className={classes}>
            <Input
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                checked={props.checked}
            />
            <Text>{props.text}</Text>
            <Checkmark />
        </Label>
    );
}
