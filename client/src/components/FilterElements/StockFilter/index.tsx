import { useState } from "react";
import { StockFilterStyle } from "./styled";
import Switch from "@/components/FormElements/Switch";

export default function StockFilter() {
    const [first, setFirst] = useState<boolean>(false);

    const handleChange = () => {
        setFirst(!first);
        console.log("first");
    };
    return (
        <StockFilterStyle>
            <Switch
                checked={first}
                kind="dark"
                text="Hide out of stock items:"
                onChange={handleChange}
            />
        </StockFilterStyle>
    );
}
