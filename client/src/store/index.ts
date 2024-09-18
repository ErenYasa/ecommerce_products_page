import {
    Middleware,
    configureStore,
    isRejectedWithValue,
} from "@reduxjs/toolkit";
import App from "./slices/app.slice";
import Modal from "./slices/modal.slice";
import { baseApi } from "@/services";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) console.error(action.error.message);

    return next(action);
};

export const store = configureStore({
    reducer: {
        App,
        Modal,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            baseApi.middleware,
            rtkQueryErrorLogger
        ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
