
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./cartSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    Key: "root",
    storage,
};

const presistedReducer = persistReducer(persistConfig,myreducer );

const store = configureStore({
    reducer: {
        mycart: presistedReducer,
    },
});



export const persistor = persistStore(store);
export default store;