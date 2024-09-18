import { CheckboxListStyle } from "./styled";
import Checkbox from "../FormElements/Checkbox";
import { CheckboxListProps } from "./CheckboxList.defs";
import { isInitFilter, updateFilter } from "@/helpers/filterHelpers";

export default function CheckboxList({
    data,
    checkboxSize,
    checkboxTextOrder,
    checkboxName,
}: CheckboxListProps) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        updateFilter(name, value, !checked);
    };

    return (
        <CheckboxListStyle>
            {data.map((item, index) => (
                <Checkbox
                    text={item}
                    key={index}
                    name={checkboxName}
                    value={item}
                    onChange={onChangeHandler}
                    defaultChecked={isInitFilter(checkboxName, item)}
                    kind="dark"
                    size={checkboxSize}
                    textOrder={checkboxTextOrder}
                />
            ))}
        </CheckboxListStyle>
    );
}
