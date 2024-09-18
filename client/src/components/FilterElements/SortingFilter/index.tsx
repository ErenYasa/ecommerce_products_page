import { ChangeEvent } from "react";
import DropdownList from "@/components/DropdownList";
import { sortingItems } from "@/config";
import { updateFilter } from "@/helpers/filterHelpers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveFilters } from "@/store/slices/app.slice";

export default function SortingFilter() {
    const { activeFilters } = useAppSelector((state) => state.App);
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        /* URL'DE "sort" PARAMETRESİNİ GÜNCELLE */
        updateFilter("sort", e.target.value);
        /*  */

        /* STORE'DA AKTİF OLAN FİLTRELERİ GÜNCELLE */
        dispatch(setActiveFilters({ ...activeFilters, sort: e.target.value }));
    };

    return <DropdownList listItems={sortingItems} onChange={onChangeHandler} />;
}
