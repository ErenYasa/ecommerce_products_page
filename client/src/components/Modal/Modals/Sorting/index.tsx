import { ChangeEvent } from "react";
import RadioInput from "@/components/FormElements/Radio";
import Header from "../../partials/Header";
import { Body } from "./styled";

export default function SortingModal() {
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    return (
        <>
            <Header>Sorting</Header>
            <Body>
                <RadioInput
                    text="View All"
                    textOrder="before"
                    name="a"
                    value="all"
                    onChange={change}
                    defaultChecked
                />
                <RadioInput
                    text="New Added"
                    textOrder="before"
                    name="a"
                    value="news"
                    onChange={change}
                />
                <RadioInput
                    text="Ascending Price"
                    textOrder="before"
                    name="a"
                    value="asc"
                    onChange={change}
                />
                <RadioInput
                    text="Descending Price"
                    textOrder="before"
                    name="a"
                    value="dsc"
                    onChange={change}
                />
            </Body>
        </>
    );
}
