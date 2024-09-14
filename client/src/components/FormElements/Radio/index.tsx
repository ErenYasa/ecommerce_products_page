import classnames from "classnames";
import { Input, Label, Text } from "./styled";
import { RadioProps } from "./radio.defs";

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
                onChange={props.onChange}
                defaultChecked={props.defaultChecked}
            />
            <Text order={props.textOrder || ""}>{props.text}</Text>
        </Label>
    );
}
