import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "./productSlice"
const store=configureStore({
    reducer:{
        cartitem:prodReducer

    }
})
export default store