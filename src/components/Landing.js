import React, { Component } from 'react';
import Login from './Login'
import SignUp from './SignUp' 


class Landing extends Component {

  
    render() {
        return (
            <div>
                <h1>X Mark</h1>
                <h3>Description of the app. It does things...and stuff.</h3>
                <Login />
                <SignUp />
            </div>
        );
    }
}

export default Landing;