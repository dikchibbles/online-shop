import { FETCH_ITEMS } from "./types";
import items from "../api/items";

export const fetchItems = () => async dispatch => {
    const response = await items.get('/items');
    dispatch({
        type: FETCH_ITEMS,
        payload: response.data
    });
}


