import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  useReducer from './reducers/UserSlice'


const rootReducer = combineReducers({
    useReducer
})

export const setupStore = ()=> {
    return configureStore({
        reducer: rootReducer
    })
} 


