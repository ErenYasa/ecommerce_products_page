import { Body, ListFilterStyle, Title, TitleText } from "./styled";
import { ListFilterProps } from "./listFilter.defs";
import { IconArrowDown } from "@/icons";

export default function ListFilter({
    open = false,
    className,
    title,
    children,
}: ListFilterProps) {
    return (
        <ListFilterStyle open={open} className={className || ""}>
            <Title>
                <TitleText>{title}</TitleText>
                <IconArrowDown width="12" height="12" />
            </Title>
            <Body>{children}</Body>
        </ListFilterStyle>
    );
}
