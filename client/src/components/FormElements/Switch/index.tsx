import classnames from "classnames";
import { Input, Label, Slider, Text } from "./styled";
import { CheckboxProps } from "./switch.defs";
import { KindTypes } from "@/types";

export default function Switch(props: CheckboxProps) {
    const classes = classnames({
        disabled: props.disabled,
    });

    return (
        <Label
            $kind={props.kind || KindTypes.PRIMARY}
            $size={props.size}
            className={classes}
        >
            <Text>{props.text}</Text>
            <Input
                name={props.name}
                type="checkbox"
                value={props.value}
                onChange={props.onChange}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                checked={props.checked}
            />
            <Slider />
        </Label>
    );
}
