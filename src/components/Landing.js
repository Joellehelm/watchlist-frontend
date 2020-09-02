import React, { Component } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { connect } from 'react-redux';
import '../style/Landing.css'


class Landing extends Component {
    constructor(){
        super() 
        this.state = {
            loginClick: false,
            signupClick: false,
            loginStyleName: "reveal-form-hidden",
            signupStyleName: "reveal-signup-hidden"
        }
    }

  
   

    openScroll = (type) => {
        this.setState({scrollType: type})
        if(type === "login"){
            this.setState({signupClick: false, loginClick: true, loginStyleName: "reveal-form", signupStyleName: "reveal-signup-hidden"})
        }else if(type === "signup"){
            this.setState({signupClick: true, loginClick: false, loginStyleName: "reveal-form-hidden", signupStyleName: "reveal-signup"})
        }
    }



    render() {
        return (
            <div className="landing-container">
             
                        <div className="acc-scroll-container">
                     
                            <div className="login-scroll" onClick={() => this.openScroll("login")}><p>Login</p></div>
                            
                            <div className="form-placeholder" style={this.state.signupClick ? {direction: "rtl"} : {direction: "ltr"}} >
                                <Login history={this.props.history} clicked={this.state.loginClick} loginStyleName={this.state.loginStyleName} />
                                <SignUp clicked={this.state.signupClick} signupStyleName={this.state.signupStyleName}/>
                            </div>
                           
                            <div className="signup-scroll"  onClick={() => this.openScroll("signup")}>Sign Up</div>
                      
                        </div>
          
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps)(Landing);