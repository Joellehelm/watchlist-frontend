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

    fetch(`http://localhost:3000/get_progress`, {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": `JWT ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ user_id: user_id, imdbID: imdbID })
    })
        .then(r => r.json())
        .then(progress => {
            fetch(`http://localhost:3000/shows/${imdbID}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `JWT ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(r => r.json())
                .then(show => {
                    dispatch({ type: action.GET_SHOW_PROGRESS, payload: { show, progress } })
                })


        })
};




