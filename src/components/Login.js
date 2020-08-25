import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Transition, Message } from "semantic-ui-react";
import { login, logout } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    let user = {username: username, password: password};

    this.props.login(user);

    this.setState({username: "", password: ""});
  };

  render() {
    const { username, password } = this.state;
 
    return (
      <div style={this.props.clicked ? { visibility: "visible" } : { visibility: "hidden" }} className={this.props.loginStyleName}>

        <form className="login-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
          
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
          <Button className="login-btn" type="submit">Submit</Button>
        </form>

        <div className="login-messages">
        <Transition animation="jiggle" duration={1000} visible={this.props.auth.success === false}>
            <Message visible={this.props.auth.success === false && this.props.clicked} hidden={this.props.auth.success}negative>
              <Message.Header>Username or Password is incorrect.</Message.Header>
            </Message>
          </Transition>
          </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
