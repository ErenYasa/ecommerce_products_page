import { Checkmark, Input, Label, Text } from "./styled";
import classnames from "classnames";
import { CheckboxProps } from "./Checkbox.defs";
import { KindTypes } from "@/types";

export default function Checkbox(props: CheckboxProps) {
    const classes = classnames({
        disabled: props.disabled,
    });

    return (
        <Label
            $kind={props.kind || KindTypes.PRIMARY}
            $order={props.textOrder || ""}
            $size={props.size || "std"}
            className={classes}
        >
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
