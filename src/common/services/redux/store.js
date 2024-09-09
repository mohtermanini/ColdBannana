import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./createAppSlice";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;