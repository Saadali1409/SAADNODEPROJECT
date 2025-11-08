
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./cartSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,
};

const presistedReducer = persistReducer(persistConfig,myreducer );

const store = configureStore({
    reducer: {
        mycart: presistedReducer,
    },
});



export const persistor = persistStore(store)
export default store