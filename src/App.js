import React, { Component } from 'react';
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Account from './components/Account'
import { connect } from 'react-redux';
import { autoLogin } from './actions/auth';
import { createBrowserHistory } from "history";
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const history = createBrowserHistory();
class App extends Component {
  constructor(){
    super()
    this.state = {
      navClick: "",
      history: {}
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
        <NavBar history={history} viewAccount={this.viewAccount} />
        <Router history={history}>
          <Switch>
            <Route exact path='/login'> <Login /> </Route>
            <Route exact path='/signup'> <SignUp /> </Route>
            <Route exact path='/home'> <Home navClick={this.state.navClick}/> </Route>
            <Route exact path='/account'> <Account /> </Route>
            <Route exact path='/'> <Landing /> </Route>
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
