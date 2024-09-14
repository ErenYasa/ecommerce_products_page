import { useState } from "react";
import {
    Body,
    FilterButton,
    FilteredValue,
    FilteredValueTitle,
    FilteredValueWrapper,
    GoBackButton,
    Wrapper,
} from "./styled";
import StockFilter from "@/components/FilterElements/StockFilter";
import ListFilter from "@/components/FilterElements/ListFilter";
import CheckboxList from "@/components/CheckboxList";
import Header from "../../partials/Header";
import { IconArrowDown } from "@/icons";

const BRANDS = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
    "Brand 8",
    "Brand 9",
    "Brand 10",
    "Brand 10",
    "Brand 10",
    "Brand 10",
    "Brand 10",
    "Brand 10",
    "Brand 10",
    "Brand 10",
];

const COLORS = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#000000",
    "#c0c0c0",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#800080",
    "#008080",
    "#000080",
];

export default function FiltersModal() {
    const [whichScreen, setWhichScreen] = useState<string>("main");

    const toggleScreen = (wrapperName: "main" | "brands" | "colors") => {
        setWhichScreen(wrapperName);
    };

    return (
        <>
            <Header>
                {whichScreen !== "main" ? (
                    <GoBackButton onClick={() => toggleScreen("main")}>
                        <IconArrowDown width="20" height="20" />
                    </GoBackButton>
                ) : (
                    "FILTERS"
                )}
            </Header>
            <Body>
                {/* MODALIN İLK SAYFASI */}
                {whichScreen === "main" && (
                    <>
                        <StockFilter />
                        <FilterButton
                            type="button"
                            onClick={() => toggleScreen("brands")}
                        >
                            Brands
                            {true && (
                                <FilteredValueWrapper>
                                    <FilteredValueTitle>
                                        Selected:{" "}
                                    </FilteredValueTitle>
                                    <FilteredValue>
                                        Brand 1, Brand 2, Brand 1, Brand 2,
                                        Brand 1, Brand 2, Brand 1, Brand 2
                                    </FilteredValue>
                                </FilteredValueWrapper>
                            )}
                        </FilterButton>
                        <FilterButton
                            type="button"
                            onClick={() => toggleScreen("colors")}
                        >
                            Colors
                            {true && (
                                <FilteredValueWrapper>
                                    <FilteredValueTitle>
                                        Selected:{" "}
                                    </FilteredValueTitle>
                                    <FilteredValue>
                                        Color 1, Color 2
                                    </FilteredValue>
                                </FilteredValueWrapper>
                            )}
                        </FilterButton>
                    </>
                )}
                {/*  */}
                {/* FİLTRE DETAY SAYFALARI */}
                {whichScreen !== "main" && (
                    <Wrapper>
                        {whichScreen === "brands" && (
                            <>
                                {BRANDS.length > 0 && (
                                    <ListFilter alwaysopen title="BRANDS:">
                                        <CheckboxList
                                            data={BRANDS}
                                            checkboxSize="lg"
                                            checkboxTextOrder="after"
                                        />
                                    </ListFilter>
                                )}
                            </>
                        )}
                        {whichScreen === "colors" && (
                            <>
                                {COLORS.length > 0 && (
                                    <ListFilter alwaysopen title="COLORS:">
                                        <CheckboxList
                                            data={COLORS}
                                            checkboxSize="lg"
                                            checkboxTextOrder="after"
                                        />
                                    </ListFilter>
                                )}
                            </>
                        )}
                    </Wrapper>
                )}
                {/*  */}
            </Body>
        </>
    );
}
