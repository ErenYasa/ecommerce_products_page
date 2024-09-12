import { CheckboxListStyle } from "./styled";
import { CheckboxListProps } from "./CheckboxList.defs";
import Checkbox from "../FormElements/Checkbox";

export default function CheckboxList({ data }: CheckboxListProps) {
    return (
        <CheckboxListStyle>
            {data.map((item, index) => (
                <Checkbox text={item} key={index} kind="dark" />
            ))}
        </CheckboxListStyle>
    );
}
