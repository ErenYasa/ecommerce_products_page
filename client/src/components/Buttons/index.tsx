import { ButtonStyle } from "./styled";
import { ButtonProps } from "./buttons.defs";
import { KindTypes, VariantTypes } from "@/types";

export const Button = (props: ButtonProps) => (
    <ButtonStyle
        variant={props.variant || VariantTypes.DEFAULT}
        kind={props.kind || KindTypes.PRIMARY}
        fullwidth={props.fullwidth}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}
    </ButtonStyle>
);
