import classNames from "classnames";
import { Body, ListFilterStyle, Title, TitleText } from "./styled";
import { ListFilterProps } from "./listFilter.defs";
import { IconArrowDown } from "@/icons";

export default function ListFilter({
    open = false,
    alwaysopen = false,
    className,
    title,
    children,
}: ListFilterProps) {
    const classes = classNames(className);

    return (
        <ListFilterStyle
            open={alwaysopen ? true : open}
            alwaysopen={alwaysopen ? "true" : ""}
            className={classes}
        >
            <Title>
                <TitleText>{title}</TitleText>
                {!alwaysopen && <IconArrowDown width="12" height="12" />}
            </Title>
            <Body>{children}</Body>
        </ListFilterStyle>
    );
}
