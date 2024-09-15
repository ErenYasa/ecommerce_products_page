import { Fragment, useState } from "react";
import StockFilter from "@/components/FilterElements/StockFilter";
import {
    Body,
    FilterButton,
    FilteredValue,
    FilteredValueTitle,
    FilteredValueWrapper,
    GoBackButton,
    Wrapper,
} from "./styled";
import ListFilter from "@/components/FilterElements/ListFilter";
import CheckboxList from "@/components/CheckboxList";
import Header from "../../partials/Header";
import { IconArrowDown } from "@/icons";
import { useAppSelector } from "@/store/hooks";
import { getFilterValues } from "@/helpers/filterHelpers";

export default function FiltersModal() {
    const { brand, color } = useAppSelector((state) => state.App.filterItems);
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
                {/**
                 * MODALIN İLK SAYFASI
                 * */}
                {whichScreen === "main" && (
                    <>
                        <StockFilter />
                        <FilterButton
                            type="button"
                            onClick={() => toggleScreen("brands")}
                        >
                            Brands
                            {getFilterValues("brand").length > 0 && (
                                <FilteredValueWrapper>
                                    <FilteredValueTitle>
                                        Selected:{" "}
                                    </FilteredValueTitle>
                                    <FilteredValue>
                                        {getFilterValues("brand")
                                            .sort()
                                            .map((item, i) => (
                                                <Fragment key={i}>
                                                    {item}
                                                    {i <
                                                        getFilterValues("brand")
                                                            .length -
                                                            1 && ", "}
                                                </Fragment>
                                            ))}
                                    </FilteredValue>
                                </FilteredValueWrapper>
                            )}
                        </FilterButton>
                        <FilterButton
                            type="button"
                            onClick={() => toggleScreen("colors")}
                        >
                            Colors
                            {getFilterValues("color").length > 0 && (
                                <FilteredValueWrapper>
                                    <FilteredValueTitle>
                                        Selected:{" "}
                                    </FilteredValueTitle>
                                    <FilteredValue>
                                        {getFilterValues("color")
                                            .sort()
                                            .map((item, i) => (
                                                <Fragment key={i}>
                                                    {item}
                                                    {i <
                                                        getFilterValues("color")
                                                            .length -
                                                            1 && ", "}
                                                </Fragment>
                                            ))}
                                    </FilteredValue>
                                </FilteredValueWrapper>
                            )}
                        </FilterButton>
                    </>
                )}
                {/*  */}

                {/** *
                 * FİLTRELERİN DETAY SAYFALARI
                 * */}
                {whichScreen !== "main" && (
                    <Wrapper>
                        {whichScreen === "brands" && (
                            <>
                                {brand.length > 0 && (
                                    <ListFilter alwaysopen title="BRANDS:">
                                        <CheckboxList
                                            data={brand}
                                            checkboxName="brand"
                                            checkboxSize="lg"
                                            checkboxTextOrder="after"
                                        />
                                    </ListFilter>
                                )}
                            </>
                        )}
                        {whichScreen === "colors" && (
                            <>
                                {color.length > 0 && (
                                    <ListFilter alwaysopen title="COLORS:">
                                        <CheckboxList
                                            data={color}
                                            checkboxName="color"
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
