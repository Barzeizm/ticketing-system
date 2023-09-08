import React from "react";
import "../App.css";

const Header = (props) => {
    return (
        <>
            <div className='Header'>
                <div className='Ellipse-1'></div>
                <div className='Ellipse-2'></div>
                <div className='Ellipse-3'></div>
                <h4 className='Nav-Title'>{props.title}</h4>
            </div>
        </>
    );
};

export default Header;
