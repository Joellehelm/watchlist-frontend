import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth'
import { Button, Transition, Message, Input} from 'semantic-ui-react'


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            clicked: false,
            passwordError: false
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
        if (password !== password_confirmation) {
            this.setState({ passwordError: true })
        } else {
            this.setState({ passwordError: false })
            let user = {
                username: username,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            this.props.register(user)

            this.setState({
                username: "",
                email: "",
                password: "",
                password_confirmation: ""
            })
        }
    }

    openScroll = () => {
        this.setState({ clicked: true })
    }

    render() {
        const { usernameError, emailError } = this.props
        const { username, email, password, password_confirmation } = this.state
        return (

            <div style={this.props.clicked ? { visibility: "visible" } : { visibility: "hidden" }} className={this.props.signupStyleName}>

                <form className="signup-form" onSubmit={this.handleSubmit}>

                    <Input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                    <Input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                    <Input type="password" error={this.state.passwordError} autoComplete="new-password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                    <Input type="password" error={this.state.passwordError} autoComplete="new-password" placeholder="Password Confirmation" name="password_confirmation" value={password_confirmation} onChange={this.handleChange} />
                    <Button className="signup-btn" type="submit">Sign Up</Button>



                </form>
                <div className="signup-messages">

                <Transition animation="jiggle" duration={1000} visible={emailError}>
                        <Message visible={emailError && this.props.clicked} hidden={emailError === false} negative>
                            <Message.Header>Email already in use.</Message.Header>
                        </Message>
                    </Transition>

                    <Transition animation="jiggle" duration={1000} visible={this.state.passwordError}>
                        <Message visible={this.state.passwordError && this.props.clicked} hidden={this.state.passwordError === false} negative>
                            <Message.Header>Passwords and confirmation must match.</Message.Header>
                        </Message>
                    </Transition>

                    <Transition animation="jiggle" duration={1000} visible={usernameError}>
                        <Message visible={usernameError && this.props.clicked} hidden={usernameError === false} negative>
                            <Message.Header>Username already taken.</Message.Header>
                        </Message>
                    </Transition>

                    <Transition animation="jiggle" duration={1000} visible={this.props.created === true}>
                        <Message visible={this.props.created && this.props.clicked} hidden={ this.props.created === undefined} positive>
                            <Message.Header>Account Successfully Created.</Message.Header>
                        </Message>
                    </Transition>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    usernameError: state.auth.usernameError,
    emailError: state.auth.emailError,
    created: state.auth.creation
})
export default connect(mapStateToProps, { register })(SignUp);