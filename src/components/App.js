import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import "../style/App.css";

const App = () => {
    return (
        <>
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;

