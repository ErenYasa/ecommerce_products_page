import { BreadcrumbContainer, Item, ItemLink, Separator } from "./styled";
import { IconRightChevron } from "@/icons";

const ITEMS = [
    {
        id: 1,
        name: "Home",
        url: "#",
        isActive: false,
    },
    {
        id: 2,
        name: "Parent",
        url: "#",
        isActive: false,
    },
    {
        id: 3,
        name: "Child",
        url: "#",
        isActive: true,
    },
];

export function Breadcrumb() {
    return (
        <BreadcrumbContainer>
            {ITEMS.map((item, i) => (
                <Item key={item.id}>
                    {i > 0 && (
                        <Separator>
                            <IconRightChevron width={8} height={10} />
                        </Separator>
                    )}
                    <ItemLink
                        href={item.url}
                        active={item.isActive ? "true" : ""}
                    >
                        {item.name}
                    </ItemLink>
                </Item>
            ))}
        </BreadcrumbContainer>
    );
}
