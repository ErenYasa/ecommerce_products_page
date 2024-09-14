import { IEnv } from "./helpers.defs";

export const getEnv = (): IEnv => {
    if (process.env.NODE_ENV === "development") return "DEV";

    return "PROD";
};
