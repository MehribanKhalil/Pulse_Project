import React from "react";
import Navbar from "../Navbar";
import './index.css'
const Header = () => {
  return (
    <div className="header">
        <Navbar/>
        <div className="header_content">
            <h1 className="header_title">Food and more<span>.</span>
            <div className="header_text">
                <span>By Chef Francis Smith</span>
            </div>
            </h1>
            
        </div>
        
    </div>
  );
};

export default Header;
