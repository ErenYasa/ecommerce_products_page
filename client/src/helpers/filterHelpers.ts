import { store } from "@/store";
import { setActiveFilters } from "@/store/slices/app.slice";

interface SearchParams {
    [key: string]: string;
}

/* BAŞLANGIÇTA OLAN QUERY PARAMS'LARI GETİR */
export const initFilters = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const newParams: SearchParams = {};

    urlSearchParams.forEach((value, key) => {
        newParams[key] = value;
    });

    return newParams;
};
/*  */

/* BAŞLANGIÇTA QUERY PARAMS'A PARAMETRE EKLE */
export const setInitFilters = (key: string, value: string) => {
    const existedFilters = initFilters();

    if (!existedFilters[key])
        updateURLParams({ ...existedFilters, [key]: value });
};
/*  */

/* PARAMETRE BAŞLANGIÇTA VAR MI? */
export const isInitFilter = (key: string, value: string) => {
    const existedFilters = initFilters();
    /* PARAMETRE(YANİ KEY) VAR M? VARSA DEĞERLERİNİ ARRAY'E ÇEVİR */
    const existedValues = existedFilters[key]
        ? existedFilters[key].split(", ")
        : [];

    /* DEĞERLERİN ARASINDA VERİLEN DEĞER VAR MI? */
    return existedValues.includes(value);
};
/*  */

// PARAMETREYİ GETİR
export const getFilterValues = (key: string) => {
    const existedFilters = initFilters();
    const existedValues = existedFilters[key]
        ? existedFilters[key].split(", ")
        : [];

    return existedValues;
};
/*  */

// TÜM PARAMETRELERİ GETİR
export const getAllFilters = () => {
    const existedFilters = initFilters();

    return existedFilters;
};
/*  */

/* PARAMETREYİ GÜNCELLE */
export const updateFilter = (
    key: string,
    value: string,
    delFilter?: boolean
) => {
    const existedFilters = initFilters();
    let newFilters = { ...existedFilters };

    /* GELEN PARAMETRE(YANİ KEY) VARSA */
    if (existedFilters[key]) {
        /* STRING OLARAK GELEN PARAMETRE DEĞERLEİNİ ARRAY'E ÇEVİR */
        const existedValues = existedFilters[key].split(", ");

        /* SORT PARAMETRESİNE BİRDEN FAZLA DEĞER EKLEMEMESİ İÇİN */
        if (key === "sort") {
            newFilters = { ...existedFilters, [key]: value };

            store.dispatch(setActiveFilters({ ...newFilters }));
            updateURLParams(newFilters);

            return;
        }
        /*  */

        /* "delFilter" PARAMETRESİ VARSA PARAMETREYİ SİL */
        if (existedValues.includes(value) && delFilter) {
            /* PARAMETRENİN VAR OLAN DEĞERLERİNDEN, VERİLEN DEĞERİ ÇIKAR */
            const newValues = existedValues.filter((v) => v !== value);

            /* VERİLEN DEĞER ÇIKARTILDIKTAN SONRA BAŞKA DEĞERLER VARSA, O DEĞERLERİ STRING'E ÇEVİR */
            if (newValues.length > 0) newFilters[key] = newValues.join(", ");
            /*  */
            /* VERİLEN DEĞER ÇIKARTILDIKTAN SONRA BAŞKA HERHANGİ BİR DEĞER KALMADIYSA,
      PARAMETREYİ SİL */ else delete newFilters[key];
            /*  */
        } else {
            /* "delFilter" PARAMETRESİ YOKSA VAR OLAN PARAMETRELER ARRAY'İNİ GÜNCELLE VE STRING'E ÇEVİR */
            existedValues.push(value);
            newFilters[key] = existedValues.join(", ");
        }
        /* GELEN PARAMETRE(YANİ KEY) YOKSA O KEY'LE YENİ BİR PARAMETRE OLUŞTUR */
    } else newFilters[key] = value;

    /* AKTİF FİLTRELERİ GÜNCELLE */
    store.dispatch(setActiveFilters({ ...newFilters }));
    /* YAPILAN DEĞİŞİKLİKLERİ URL'YE UYGULA */
    updateURLParams(newFilters);
};
/*  */

/* PARAMETREYİ SİL */
export const removeFilter = (key: string, value: string) => {
    const existedFilters = initFilters();
    const newFilters = { ...existedFilters };

    /* GELEN PARAMETRE(YANİ KEY) VARSA */
    if (existedFilters[key]) {
        /* STRING OLARAK GELEN PARAMETRE DEĞERLEİNİ ARRAY'E ÇEVİR */
        const existedValues = existedFilters[key].split(", ");
        /*  */

        /* PARAMETRENİN VAR OLAN DEĞERLERİNDEN, VERİLEN DEĞERİ ÇIKAR */
        const newValues = existedValues.filter((v) => v !== value);

        /* VERİLEN DEĞER ÇIKARTILDIKTAN SONRA BAŞKA DEĞERLER VARSA, O DEĞERLERİ STRING'E ÇEVİR */
        if (newValues.length > 0) newFilters[key] = newValues.join(", ");
        /*  */
        /* VERİLEN DEĞER ÇIKARTILDIKTAN SONRA BAŞKA HERHANGİ BİR DEĞER KALMADIYSA,
    PARAMETREYİ SİL */ else delete newFilters[key];
    }

    /* YAPILAN DEĞİŞİKLİKLERİ URL'YE UYGULA */
    updateURLParams(newFilters);
};
/*  */

/* URL'YE PARAMETRELERİ EKLE */
const updateURLParams = (updatedParams: SearchParams) => {
    const searchParams = new URLSearchParams(updatedParams);
    const newURL = `${window.location.pathname}?${searchParams.toString()}`;

    window.history.pushState({}, "", newURL);
};
/*  */
