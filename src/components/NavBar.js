import React, { Component } from 'react';
import Account from './Account'

class NavBar extends Component {
    
    render() {
        return (
            <div>
                <h1>YO IM THE NAV BAR</h1>
                <button onClick={this.props.viewAccount}>Account</button>
            </div>
        );
    }
}

export default NavBar;