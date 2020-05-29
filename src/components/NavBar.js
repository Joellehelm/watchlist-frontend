import React, { Component } from 'react';

function NavBar(props){
    
    

        return (
            <div>
                <h1>YO IM THE NAV BAR</h1>
                {/* <button onClick={props.viewAccount}>Account</button> */}
                <button onClick={() => props.history.push("/account")}>Account</button>
            
            </div>
        );
    
}


export default NavBar;