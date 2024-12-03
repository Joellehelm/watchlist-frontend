import * as act from '../actions/actionTypes';

const initialState = {
  show: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case act.VIEW_SHOW:
      return {
        ...state,
        show: action.payload
      };

    default:
      return state;
  }
}