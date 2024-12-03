import React, { Component } from 'react';
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Account from './components/Account'
import NoMatch from './components/NoMatch'
import Watchlist from './components/Watchlist'
import ProtectedRoute from './components/ProtectedRoute'
import ShowProgress from './components/ShowProgress'
import Burger from 'react-css-burger';
import { connect } from 'react-redux';
import { autoLogin } from './actions/auth';
import { createBrowserHistory } from "history";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import './style/App.css'

const history = createBrowserHistory();
class App extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      history.push("/home")
      this.props.autoLogin()
    } else {
      history.push("/")
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  navClick = (location) => {
    history.push(location)
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        {window.screen.availWidth < 800 ?
          <>
            <Burger

              burger="emphatic"
              onClick={this.handleClick}
              active={this.state.open}
            />
            <div className={this.state.open ? "nav-slide-wrapper" : "nav-slide-closed"}>
              <div className={this.state.open ? "nav-slide-inner" : "nav-slide-inner-hidden"}>
                <p className="nav-slide-link" onClick={() => this.navClick("/home")}>Home</p>
                <p className="nav-slide-link" onClick={() => this.navClick("/account")}>Account</p>
                <p className="nav-slide-link" onClick={() => this.navClick("/watchlist")}>Watchlist</p>
              </div>
            </div>
          </>
          :
          null
        }

        <NavBar history={history} />

        <div className="app-container">
          <Router history={history}>
            <Switch>
              <Route exact path='/login'> <Login /> </Route>
              <ProtectedRoute path="/home"><Home /></ProtectedRoute>
              <Route exact path='/signup'> <SignUp /> </Route>
              <Route exact path='/account' > <Account history={history} /> </Route>
              <Route exact path='/watchlist'> <Watchlist history={history} /> </Route>
              <Route exact path='/show-progress'> <ShowProgress history={history} /> </Route>
              <Route exact path='/'> <Landing history={history} /> </Route>
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
