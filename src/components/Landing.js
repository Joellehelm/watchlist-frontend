import React, { Component } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { connect } from 'react-redux';
import { Transition, Container } from 'semantic-ui-react' 
import '../style/Landing.css'

import { Redirect } from "react-router-dom";
  


class Landing extends Component {
    constructor(){
        super() 
        this.state = {
            scrollType: "",
            loginClick: false,
            signupClick: false
        }
    }

    openScroll = (type) => {
        this.setState({scrollType: type})
        if(type === "login"){
            console.log("LOGIN CLICK")
            this.setState({signupClick: false, loginClick: true})
        }else if(type === "signup"){
            this.setState({signupClick: false, loginClick: true})
        }
    }

    renderForm = () => {
        if(this.state.scrollType === "login"){
            return <Login clicked={this.state.loginClick} />
        }else if(this.state.scrollType === "signup"){
            return <SignUp />
        }
    }



    render() {
        return (
            <div className="landing-container">
             
            
                <p>Description of the app. It does things...and stuff.</p>
                
                {
                    this.props.auth.user.username ?
                        <Redirect to="/home" />
                        :
                        
                        <div className="acc-scroll-container">
                            {/* <div className="login-div"> */}
                            <div className="login-scroll" onClick={() => this.openScroll("login")}><p>Login</p></div>
                            {/* </div> */}
                           
                            <div className="form-placeholder">
                                {this.renderForm()}
                                
                            </div>
                           
                             {/* <div className="signup-div"> */}
                            <div className="signup-scroll"  onClick={() => this.openScroll("signup")}>Sign Up</div>
                             {/* </div> */}
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