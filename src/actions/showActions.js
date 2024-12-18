import * as action from './actionTypes'


export const viewShow = (show) => dispatch => {
  fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${show.imdbID}&plot=full`)
    .then(r => r.json())
    .then(response => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/show_in_watchlist`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ imdbID: show.imdbID })
      })
        .then(r => r.json())
        .then(includedInWatchlist => {
          response.inWatchlist = includedInWatchlist
          dispatch({ type: action.VIEW_SHOW, payload: response })
        })

    })
};





