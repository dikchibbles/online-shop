import React from "react";
import { connect } from "react-redux";
import { reduceQuantity } from "../actions";

const CartItem = (props) => {
    const {title, thumbnailUrl} = props.item;

    const renderQuantity = () => {
        return (
            <div className="quantity">
                <i className="fa-solid fa-minus fa-2x" onClick={() => {
                    props.reduceQuantity(props.item);
                    console.log(props.state)
                    }}></i>
                <h2>{props.quantity}</h2>
                <i className="fa-solid fa-plus fa-2x"></i>
            </div>
        );
    }

    return (
        <div className="item">
            <i  className="fa-solid fa-xmark fa-lg close" onClick={() => props.handleButtonPress(props.item.id)}></i>
            <h3 className="item-title">{title}</h3>
            <div className="item-image" style={{backgroundImage: `url(${thumbnailUrl})`}}></div>
            {renderQuantity()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { state: state.cart }
}

export default connect(mapStateToProps , { reduceQuantity })(CartItem);



