import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./itemsReducer";

export default combineReducers({
    items: itemsReducer
})
