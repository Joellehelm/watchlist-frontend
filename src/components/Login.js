import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { logout } from '../actions/auth';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            clicked: false
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

    openScroll = () => {
        this.setState({clicked: true})
    }



    render() {
        const { username, password } = this.state
        return (

            <div>
                {this.state.clicked ?
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Name" name="username" value={username} onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    :
                    <button className="login-scroll" onClick={this.openScroll}>Login Scroll</button>
                }
            </div>

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


