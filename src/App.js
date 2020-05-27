import React, { Component } from 'react';
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Account from './components/Account'
import { connect } from 'react-redux';
import { autoLogin } from './actions/auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state = {
      navClick: ""
    }
  }

   componentDidMount() {
     
        if (localStorage.getItem('token')) {
            this.props.autoLogin()
        }
    }

  viewAccount = () => {
    this.setState({navClick: "account"})
  }
  
  render() {
    return (
      <div>
        <NavBar viewAccount={this.viewAccount} />
        <Router>
          <Switch>
            <Route exact path='/'> <Landing /> </Route>
            <Route exact path='/login'> <Login /> </Route>
            <Route exact path='/signup'> <SignUp /> </Route>
            <Route exact path='/home'> <Home navClick={this.state.navClick}/> </Route>
            <Route exact path='/account'> <Account /> </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  autoLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
