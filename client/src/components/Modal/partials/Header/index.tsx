import { HeaderProps } from "./modalHeader.defs";
import { HeaderStyle } from "./styled";

export default function Header({ children }: HeaderProps) {
    return <HeaderStyle>{children}</HeaderStyle>;
}
