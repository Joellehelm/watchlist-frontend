import * as act from '../actions/actionTypes';

const initialState = {
  watchlist: {},
  showProgress: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case act.WATCHLIST:
      return {
        ...state,
        watchlist: action.payload
      };

    case act.GET_SHOW_PROGRESS:
      return {
        ...state,
        showProgress: action.payload
      }

    default:
      return state;
  }
}