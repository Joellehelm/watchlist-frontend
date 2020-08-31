import * as action from './actionTypes'
// import { getWatchlist } from './watchlistActions'


export const register = (user) => dispatch => {
  return fetch('http://localhost:3000/users', {
    // return fetch("https://xmarkbackend.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(r => r.json())
    .then(response => {
      if (response.status === "created") {

        dispatch({ type: action.CURRENT_USER, payload: response })
      } else if (response.status === "not_acceptable") {
        dispatch({ type: action.SIGNUP_ERRORS, payload: response })
      }
    })
    .catch(error => console.log('API Errors:', error))
};



export const login = (user) => dispatch => {
  return fetch('http://localhost:3000/login', {
    // return fetch("https://xmarkbackend.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(r => r.json())
    .then(response => {
      if (response.user) {
        dispatch({ type: action.LOGIN, payload: response })
        localStorage.setItem('token', response.jwt)
        // dispatch(getWatchlist())
      } else {
        dispatch({ type: action.WRONG_LOGIN, })
      }
    })

};


export const logout = (history) => dispatch => {
  localStorage.removeItem("token");
  history.push('/')
  dispatch({ type: action.LOGOUT})
};


export const autoLogin = () => dispatch => {
  return fetch("http://localhost:3000/auto_login", {
    // return fetch("https://xmarkbackend.herokuapp.com/auto_login", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Authorization": `JWT ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
    .then(r => r.json())
    .then(response => {
      if (response.user) {
        dispatch({ type: action.AUTO_LOGIN, payload: response })
      }
    })
}


