import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import { persistReducer,PersistConfig } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
export const store=configureStore({
    reducer:{
        auth:authReducer
    },
})

