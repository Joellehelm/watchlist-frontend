import * as act from '../actions/actionTypes';


const initialState = {
    user: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case act.CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                creation: true
            };

        case act.LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true
            };

        case act.LOGOUT:
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }

        case act.WRONG_LOGIN:
            return {
                ...state,
                wrong: true,
                user: {},
                isLoggedIn: false
            }

        case act.AUTO_LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggingIn: true
            }

        default:
            return state;
    }



}