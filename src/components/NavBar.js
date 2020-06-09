import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Compass from './Compass'
import CompassMenu from './CompassMenu'
import '../style/navBar.css'

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            navMenu: false
        }
    }

    menuClick = () => {
        this.setState({
            navMenu: !this.state.navMenu
        })
    }

    render() {
        return (
            <div className="navBar">

                <div className="inner-nav">

                    <div className="logo">
                        <span className="xLogo">X</span>
                        <span className="markLogo"> - Mark</span>
                    </div>

                    <div onClick={this.menuClick} className="compass-container">
                        <Compass fill={"black"} />
                    </div>
                    
                </div>

                {this.state.navMenu ?
                    <CompassMenu />
                    :
                    null}
            </div>
        );
    }

}


export default NavBar;