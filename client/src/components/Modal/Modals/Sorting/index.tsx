import { ChangeEvent } from "react";
import RadioInput from "@/components/FormElements/Radio";
import Header from "../../partials/Header";
import { Body } from "./styled";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveFilters } from "@/store/slices/app.slice";
import { isInitFilter, updateFilter } from "@/helpers/filterHelpers";
import { KindTypes, ModalNames } from "@/types";
import { closeModal } from "@/store/slices/modal.slice";
import { sortingItems } from "@/config";

export default function SortingModal() {
    const { activeFilters } = useAppSelector((state) => state.App);
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        /* QUERY PARAMS UPDATE */
        updateFilter("sort", e.target.value);
        /*  */

        /* STORE'DA AKTİF OLAN FİLTRELERİ GÜNCELLE */
        dispatch(setActiveFilters({ ...activeFilters, sort: e.target.value }));
        /*  */

        /* SORT DEĞİŞİKLİĞİ SONRASI MODAL'I KAPAT */
        dispatch(closeModal({ name: ModalNames.SORTING }));
        /*  */
    };
    return (
        <>
            <Header>Sorting</Header>
            <Body>
                {sortingItems.map(({ text, value }, i) => (
                    <RadioInput
                        name="sort"
                        value={value}
                        text={text}
                        textOrder="before"
                        kind={KindTypes.DARK}
                        onChange={onChangeHandler}
                        defaultChecked={isInitFilter("sort", value)}
                        key={i}
                    />
                ))}
            </Body>
        </>
    );
}
