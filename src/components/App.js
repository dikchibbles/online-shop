import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Shop from "./Shop";
import StickyCart from "./StickyCart";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import "../style/App.css";

const App = () => {
    return (
        <div className="main-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            <Footer />
            <StickyCart />
        </div>
    );
}

export default App;

