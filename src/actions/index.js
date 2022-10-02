import { 
    ADD_TO_CART, 
    FETCH_ITEMS,
    REMOVE_FROM_CART,
    REDUCE_QUANTITY
} from "./types";
import items from "../api/items";

export const fetchItems = () => async dispatch => {
    const response = await items.get('/items');
    dispatch({
        type: FETCH_ITEMS,
        payload: response.data
    });
}

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const reduceQuantity = item => {
    return {
        type: REDUCE_QUANTITY,
        payload: item
    }
}




