import * as action from './actionTypes'


export const viewShow = (show) => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${show.imdbID}&plot=full`)
      .then(r => r.json())
      .then(response => {
        // fetch('http://localhost:3000/show_in_watchlist', {
          fetch('https://xmarkbackend.herokuapp.com/show_in_watchlist', {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Accept": "application/json",
                 "Authorization": `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({imdbID: show.imdbID})
        })
        .then(r => r.json())
        .then(includedInWatchlist => {
            response.inWatchlist = includedInWatchlist
            dispatch({ type: action.VIEW_SHOW, payload: response })
        })

      })
};





