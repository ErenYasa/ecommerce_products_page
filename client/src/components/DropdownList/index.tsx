import { Container, Holder, List, ListItem } from "./styled";
import { DropdownListProps } from "./dropdownList.defs";
import { IconArrowDown } from "@/icons";

export default function DropdownList({
    listItems,
    onChange,
}: DropdownListProps) {
    return (
        <Container>
            <Holder>
                <List onChange={onChange}>
                    {listItems.map(({ text, value }, i) => (
                        <ListItem value={value} key={i}>
                            {text}
                        </ListItem>
                    ))}
                </List>
            </Holder>
            <IconArrowDown width="12" height="12" />
        </Container>
    );
}
