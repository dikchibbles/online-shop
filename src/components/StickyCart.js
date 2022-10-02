import React from "react";
import "../style/StickyCart.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const StickyCart = (props) => {
    const mainDiv = useRef();
    const navigate = useNavigate();
    
    const handleCloseEvent = (e) => {
        mainDiv.current.remove();
        e.stopPropagation();
    }

    return (
        <div ref={mainDiv} className="cart-container" onClick={() => navigate('/cart')} >
            <i  className="fa-solid fa-xmark fa-lg close" onClick={handleCloseEvent}></i>
            <div className="floating-cart">
                <i className="fa-solid fa-cart-shopping fa-2x">{props.cart.length}</i>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { cart: Object.values(state.cart) }
}

export default connect(mapStateToProps)(StickyCart);

