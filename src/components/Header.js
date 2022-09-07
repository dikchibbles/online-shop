import React from "react";
import '../style/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="menu">
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">Shop</Link>
            </div>
        </div>
    );
}

export default Header;
