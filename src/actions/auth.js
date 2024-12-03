import * as action from './actionTypes'

export const register = (user) => dispatch => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
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
        return "success"
      } else if (response.status === "not_acceptable") {
        dispatch({ type: action.SIGNUP_ERRORS, payload: response })
      }
    })
};

export const login = (user, history) => dispatch => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
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
        history.push("/home")
      } else {
        dispatch({ type: action.WRONG_LOGIN, })
      }
    })
};

export const logout = (history) => dispatch => {
  localStorage.removeItem("token");
  history.push('/')
  dispatch({ type: action.LOGOUT })
};


export const autoLogin = () => dispatch => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auto_login`, {
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


