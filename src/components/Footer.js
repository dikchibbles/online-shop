import React from "react";

const Footer = () => {
    const renderCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className="footer">
            <h2>Made by me {renderCurrentYear()}</h2>
        </div>
    );
}

export default Footer;

