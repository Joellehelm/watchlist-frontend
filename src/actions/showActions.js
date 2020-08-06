import * as action from './actionTypes'


export const viewShow = (show) => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${show.imdbID}&plot=full`)
      .then(r => r.json())
      .then(response => {
          dispatch({ type: action.VIEW_SHOW, payload: response })
      })
};





