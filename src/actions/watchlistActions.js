import * as action from './actionTypes'


export const getWatchlist = () => dispatch => {
    fetch(`http://localhost:3000/watchlist`, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `JWT ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(r => r.json())
    .then(response => {
        dispatch({ type: action.WATCHLIST, payload: response })
    })

   
};

export const getShowProgress = (user_id, imdbID) => dispatch => {
    console.log(user_id, "<USERID ... IMDBID>", imdbID)
    dispatch({type: action.GET_SHOW_PROGRESS, payload: "sup"})
  };




