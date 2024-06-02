import React from 'react';
import'./Header.css';
 
const Header=({headTitle})=>{
    return(
        <div className="head-container">
            <h1 className="head-text">{headTitle}</h1>
        </div>
    );
};

export default Header;