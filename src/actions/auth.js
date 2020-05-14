import * as action from './actionTypes'


export const register = (user) => dispatch => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({user})
    })
    .then(r => r.json())
    .then(response => {
        if(response.status === "created"){
          console.log(response)
            dispatch({type: action.CURRENT_USER, payload: response})
        }
    })
    .catch(error => console.log('API Errors:', error))
  };



export const login = (user, history) => dispatch => {
    return fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({user})
    })
    .then(r => r.json())
    .then(response => {
      if (response.user) {
            dispatch({
                type: action.LOGIN,
                payload: response
            })
        localStorage.setItem('token', response.jwt) 
      } else {
       dispatch({
         type: action.WRONG_LOGIN,
       })
      }
    })
    .catch(error => console.log('API Errors:', error))
  };



export const logout = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({
      type: action.LOGOUT
    })
  };


