import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";

const rootReducer = combineReducers({
    uiSlice
})

export const store = configureStore({
    reducer: {rootReducer},
})