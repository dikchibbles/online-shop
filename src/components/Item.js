import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import "../style/Cart.css";

const Item = (props) => {
    const {title, thumbnailUrl} = props.item;

    const renderQuantity = () => {
        return (
            <div className="quantity">
                <i className="fa-solid fa-minus fa-2x"></i>
                <h2>{props.quantity}</h2>
                <i className="fa-solid fa-plus fa-2x"></i>
            </div>
        );
    }

    const renderAddAndReduceBtns = () => {
        return 
    }

    return (
        <div className="item">
            <h3 className="item-title">{title}</h3>
            <div className="item-image" style={{backgroundImage: `url(${thumbnailUrl})`}}></div>
            <button className={props.btnClassName} onClick={props.handleButtonPress}>{props.btnText}</button>
            {props.quantity ? renderQuantity() : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

export default connect(mapStateToProps, { addToCart })(Item);




