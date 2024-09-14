import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getEnv } from "@/helpers";

const setBaseUrl = () => {
    if (getEnv() === "DEV") return "http://localhost:3004/";
    return "";
};

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: setBaseUrl() }),
    endpoints: () => ({}),
});
