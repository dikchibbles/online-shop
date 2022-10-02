import React from "react";
import '../style/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <Link to="/" className="link">LOGO</Link>
            </div>
            <div className="menu">
                <Link to="/" className="link">Home</Link>
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/cart" className="link">Cart</Link>
            </div>
        </div>
    );
}

export default Header;
