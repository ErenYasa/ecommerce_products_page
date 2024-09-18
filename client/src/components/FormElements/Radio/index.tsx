import classnames from "classnames";
import { Input, Label, Text } from "./styled";
import { RadioProps } from "./radio.defs";
import { KindTypes } from "@/types";

export default function RadioInput(props: RadioProps) {
    const classes = classnames({
        disabled: props.disabled,
    });

    return (
        <Label className={classes}>
            <Input
                type="radio"
                name={props.name}
                value={props.value}
                $kind={props.kind || KindTypes.PRIMARY}
                onChange={props.onChange}
                defaultChecked={props.defaultChecked}
                checked={props.checked}
                disabled={props.disabled}
            />
            <Text order={props.textOrder || ""}>{props.text}</Text>
        </Label>
    );
}
