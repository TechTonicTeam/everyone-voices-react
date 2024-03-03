import {combineReducers, createStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import switchTape from "./slices/switchTape";

const rootReducer =  combineReducers({
        authLevel: authSlice,
        switchTape,
})

export const store = createStore(rootReducer)