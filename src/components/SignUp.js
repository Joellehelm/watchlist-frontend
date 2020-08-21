import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth'
import { Button } from 'semantic-ui-react'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            clicked: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };


    handleSubmit = (event) => {
        event.preventDefault()
        const { username, email, password, password_confirmation } = this.state
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            status: "created"
        }
        this.props.register(user)

        this.setState({
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        })
    }

    openScroll = () => {
        this.setState({ clicked: true })
    }

    render() {
        const { username, email, password, password_confirmation } = this.state
        return (
            
            <div style={this.props.clicked ? {visibility: "visible"} : {visibility: "hidden"}} className={this.props.signupStyleName}>
            
                {/* <div className={this.props.signupStyleName}> */}
                        <form className="signup-form" onSubmit={this.handleSubmit}>
                
                            <input type="text" placeholder="Name" name="username" value={username} onChange={this.handleChange} />
                            <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                            <input type="password" autoComplete="new-password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                            <input type="password" autoComplete="new-password" placeholder="Password Confirmation" name="password_confirmation" value={password_confirmation} onChange={this.handleChange} />
                            <Button className="signup-btn" type="submit">Sign Up</Button>
                        </form>
                    {/* </div> */}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})
export default connect(mapStateToProps, { register })(SignUp);