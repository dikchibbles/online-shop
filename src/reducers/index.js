import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    items: itemsReducer,
    cart: cartReducer
})
