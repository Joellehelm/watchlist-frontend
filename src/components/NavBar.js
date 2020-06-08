import React from 'react';
import { NavLink } from 'react-router-dom'


import '../style/navBar.css'

function NavBar(props) {



    return (

        <div className="navBar">
            <div className="logo">
                <span className="xLogo">X</span>
                <span className="markLogo"> - Mark</span>
            </div>
        </div>
    );

}


export default NavBar;