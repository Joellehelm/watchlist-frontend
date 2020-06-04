import React from 'react';
import { NavLink } from 'react-router-dom'


import '../style/navBar.css'

function NavBar(props) {



    return (
        <div>
            <div className="navBar">
                <div className="logo">
                    <span className="xLogo">X</span>
                    <span className="markLogo"> - Mark</span>
                </div>
            

                {/* <span onClick={() => props.history.push("/account")}>Account</span> */}



            </div>
            
        </div>
    );

}


export default NavBar;