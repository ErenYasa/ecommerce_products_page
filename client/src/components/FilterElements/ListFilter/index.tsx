import classNames from "classnames";
import { Body, ListFilterStyle, Title, TitleText } from "./styled";
import { ListFilterProps } from "./listFilter.defs";
import { IconArrowDown } from "@/icons";

export default function ListFilter({
    open = false,
    className,
    title,
    children,
}: ListFilterProps) {
    const classes = classNames(className);

    return (
        <ListFilterStyle open={open} className={classes}>
            <Title>
                <TitleText>{title}</TitleText>
                <IconArrowDown width="12" height="12" />
            </Title>
            <Body>{children}</Body>
        </ListFilterStyle>
    );
}
