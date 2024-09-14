import { IconArrowDown } from "@/icons";
import { Container, Holder, List, ListItem } from "./styled";

export default function DropdownList() {
    return (
        <Container>
            <Holder>
                <List>
                    <ListItem value="all">View All</ListItem>
                    <ListItem value="news">New Added</ListItem>
                    <ListItem value="asc">Ascending Pricen</ListItem>
                    <ListItem value="dsc">Descending Price</ListItem>
                </List>
            </Holder>
            <IconArrowDown width="12" height="12" />
        </Container>
    );
}
