import React from "react";
import { connect } from "react-redux";
import { fetchItems, addToCart } from "../actions";
import { useEffect } from "react";
import Item from "./Item";
import "../style/Shop.css";

const Shop = (props) => {
    useEffect(() => {
        if(props.items.length === 0) {
            props.fetchItems();
        }
    }, [])

    const handleButtonPress = (item) => {
        props.addToCart(item);
    }

    const renderItems = () => {
        if(!props.items) {
            return <h3>Loading...</h3>
        }
        return props.items.map(item => {
            return (
                <Item 
                key={item.id} 
                item={item} 
                handleButtonPress={() => handleButtonPress(item)} 
                btnClassName="add-button" 
                btnText="Add to cart" 
                />
            );
        })
    }

    return (
        <div className="shop">
            {renderItems()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { items: Object.values(state.items) }
} 

export default connect(mapStateToProps, { fetchItems, addToCart })(Shop);



