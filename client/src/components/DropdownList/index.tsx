import { IconArrowDown } from "@/Icons";
import { Container, Holder, List, ListItem } from "./styled";

export default function DropdownList() {
    return (
        <Container>
            <Holder>
                <List>
                    <ListItem value="Option 1">View All</ListItem>
                    <ListItem value="Option 2">New Added</ListItem>
                    <ListItem value="Option 3">Ascending Pricen</ListItem>
                    <ListItem value="Option 4">Descending Price</ListItem>
                </List>
            </Holder>
            <IconArrowDown width="12" height="12" />
        </Container>
    );
}
