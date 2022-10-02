import { 
    ADD_TO_CART,
    DISPLAY_CART,
    REDUCE_QUANTITY,
    REMOVE_FROM_CART
} from "../actions/types";
import _ from "lodash";
 

export default (state={}, action) => {
    switch(action.type) {
        case DISPLAY_CART:
            return state;
        case ADD_TO_CART: 
            return {...state, [action.payload.id]: {
                quantity: state[action.payload.id] ? state[action.payload.id]['quantity'] + 1: 1,
                item: action.payload
            }};
        case REMOVE_FROM_CART:
            return _.omit(state, action.payload);
        case REDUCE_QUANTITY: 
            return {...state, [action.payload.id]: {
                quantity: state[action.payload.id]['quantity'] -1,
                item: action.payload
            }}
        default:
            return state;
    }
}