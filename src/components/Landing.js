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
            signupClick: false,
            loginStyleName: "reveal-form-hidden",
            signupStyleName: "reveal-signup-hidden"
        }
    }

    openScroll = (type) => {
        this.setState({scrollType: type})
        if(type === "login"){
            console.log("LOGIN CLICK")
            this.setState({signupClick: false, loginClick: true, loginStyleName: "reveal-form", signupStyleName: "reveal-signup-hidden"})
        }else if(type === "signup"){
            this.setState({signupClick: true, loginClick: false, loginStyleName: "reveal-form-hidden", signupStyleName: "reveal-signup"})
        }
    }

    renderForm = () => {
        if(this.state.scrollType === "login"){
            return <Login clicked={this.state.loginClick} loginStyleName={this.state.loginStyleName} />
        }else if(this.state.scrollType === "signup"){
            return <SignUp />
        }
    }



    render() {
        return (
            <div className="landing-container">
             
            
                
                {
                    this.props.auth.user.username ?
                        <Redirect to="/home" />
                        :
                        
                        <div className="acc-scroll-container">
                            {/* <div className="login-div"> */}
                            <div className="login-scroll" onClick={() => this.openScroll("login")}><p>Login</p></div>
                            {/* </div> */}
                           
                            <div className="form-placeholder" style={this.state.signupClick ? {direction: "rtl"} : {direction: "ltr"}} >
                                {/* {this.renderForm()} */}
                                <Login clicked={this.state.loginClick} loginStyleName={this.state.loginStyleName} />
                                <SignUp clicked={this.state.signupClick} signupStyleName={this.state.signupStyleName}/>
                                
                                
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