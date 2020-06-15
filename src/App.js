import React, { Component } from 'react';
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Account from './components/Account'
import NoMatch from './components/NoMatch'
import './style/App.css'
import { connect } from 'react-redux';
import { autoLogin } from './actions/auth';
import { createBrowserHistory } from "history";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

const history = createBrowserHistory();
class App extends Component {
 

   componentDidMount() {
     
        if (localStorage.getItem('token')) {
            this.props.autoLogin()
        }else{
          history.push("/")
        }
        
    }


  render() {

    return (
      <div>

        <NavBar history={history} />
      
          <div className="app-container">
        <Router history={history}>
          <Switch>
            <Route exact path='/login'> <Login /> </Route>
            <Route exact path='/signup'> <SignUp /> </Route>
            <Route exact path='/home'> <Home /> </Route>
            <Route exact path='/account'> <Account /> </Route>
            <Route exact path='/'> <Landing /> </Route>
            <Route exact path="*"> <NoMatch /> </Route>
          </Switch>
        </Router>   
        </div> 

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
