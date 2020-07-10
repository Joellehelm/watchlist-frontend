import * as act from '../actions/actionTypes';

const initialState = {
    watchlist: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case act.WATCHLIST:
            return {
                ...state,
                watchlist: action.payload
            };

        default:
            return state;
    }
}