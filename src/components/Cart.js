import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import "../style/Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {

    const handleButtonPress = (id) => {
        props.removeFromCart(id);
    }

    const renderCart = () => {
        return props.cartItems.map(cartItem => {
            const {id} = cartItem.item; 
            return (
                <CartItem 
                item={cartItem.item} 
                key={id} 
                handleButtonPress={() => handleButtonPress(id)} 
                quantity={cartItem.quantity}
                />
            );
        })
    };

    if(props.cart.length === 0) {
        return <div className="cart"></div>;
    }
    return (
        <div className="cart">{renderCart()}</div>
    );
}

const mapStateToProps = (state) => {
    return { 
        cartItems: Object.values(state.cart),
        cart: state.cart
    }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);

