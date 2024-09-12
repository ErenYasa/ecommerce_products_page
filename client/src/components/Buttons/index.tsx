import { ButtonStyle } from "./styled";
import { ButtonProps } from "./buttons.defs";
import { KindTypes, VariantTypes } from "@/types";

export const ButtonPrimary = (props: ButtonProps) => (
    <ButtonStyle
        variant={props.variant || VariantTypes.DEFAULT}
        kind={props.kind || KindTypes.PRIMARY}
        disabled={props.disabled}
    >
        {props.children}
    </ButtonStyle>
);
