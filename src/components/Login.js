import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Transition, TransitionablePortal, Container } from 'semantic-ui-react'
import { login, logout } from '../actions/auth';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };


    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state
        let user = {
            username: username,
            password: password
        }

        this.props.login(user)


        this.setState({
            username: "",
            password: ""
        })

    };


    render() {
        const { username, password } = this.state

        return (

            <div style={this.props.clicked ? {visibility: "visible"} : {visibility: "hidden"}} className={this.props.loginStyleName}>
            
                {/* <div className={this.props.loginStyleName}> */}
          

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Name" name="username" value={username} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                        <Button className="login-btn" type="submit">Submit</Button>
                    </form>
                </div>

            // </div>


        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    login,
    logout
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);


