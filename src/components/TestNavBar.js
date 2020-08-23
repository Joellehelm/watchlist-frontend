import React, { Component } from 'react';
import PirateX from '../style/pirate-x.svg'
import { NavLink } from 'react-router-dom'
import '../style/navBar.css'

class TestNavBar extends Component {

    handleHover = (event) => {
        console.log(event.target.parentElement)
        event.target.parentElement.classList.add("hover-background")
    }

    mouseLeave = (event) => {
        event.target.parentElement.classList.remove("hover-background")
    }


    render() {
        return (
            <div className="test-nav-bar">
                <div className="inner-nav">
                    <div className="nav-logo-container">
                    <img className="nav-logo" onClick={() => this.props.history.push('/home')} src={PirateX}/>
                    <p className="logo-text" onClick={() => this.props.history.push('/home')} >-Mark</p>
                    </div>
                    <div className="nav-right-side">

                    <div className="nav-link-container">
                        <p onMouseOver={this.handleHover} 
                        onMouseLeave={this.mouseLeave} 
                        className="nav-link"
                        onClick={() => this.props.history.push('/home')}>Home</p>
                        </div>

                    <div className="nav-link-container">
                        <p onMouseOver={this.handleHover} 
                        onMouseLeave={this.mouseLeave} 
                        className="nav-link"
                        onClick={() => this.props.history.push('/account')}>Account</p>
                        </div>

                    <div className="nav-link-container">
                        <p onMouseOver={this.handleHover} 
                        onMouseLeave={this.mouseLeave} 
                        className="nav-link"
                        onClick={() => this.props.history.push('/watchlist')}>Watchlist</p>
                        </div>

                        </div>
                </div>
            </div>
        );
    }
}

export default TestNavBar;