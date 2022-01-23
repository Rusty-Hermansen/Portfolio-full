import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore ({
    reducer: {}
})

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDistpatch = typeof store.dispatch;
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;