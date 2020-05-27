import React, { Component } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { connect } from 'react-redux';

import {
    Redirect
  } from "react-router-dom";
  


class Landing extends Component {


    render() {
        return (
            <div>
                <h1>X Mark</h1>
                <h3>Description of the app. It does things...and stuff.</h3>
                {
                    this.props.auth.user.username ?
                        <Redirect to="/home" />
                        :
                        <div>
                            <Login />
                            <SignUp />
                        </div>
                }

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps)(Landing);