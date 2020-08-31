import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {

    render() {
        console.log(this.props)
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token') ? true : false;
    
        return this.props.loggedIn ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: '/' }} />
            );
    }

}

export default ProtectedRoute;