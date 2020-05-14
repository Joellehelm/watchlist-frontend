import React, { Component } from 'react';
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  
  
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/'> <Landing /> </Route>
            <Route exact path='/login'> <Login /> </Route>
            <Route exact path='/signup'> <SignUp /> </Route>
            <Route exact path='/home'> <Home /> </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;