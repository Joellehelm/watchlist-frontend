import React, { Component } from 'react';
import '../style/CompassMenu.scss'

class CompassMenu extends Component {
  
    render() {
        return (
       
            <div className="compass-menu-container">
                <div className="compass-links">

                    <a id="home" className="compass-item" href="/home">Home</a>
                    <a id="about" className="compass-item" href="/account">Account</a>

                </div>
            </div>
        
        );
    }
}

export default CompassMenu;