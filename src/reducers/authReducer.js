import * as act from '../actions/actionTypes';


const initialState = {
    user: {},
    emailError: false,
    usernameError: false   
};

export default function (state = initialState, action) {

    switch (action.type) {
        case act.CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                creation: true,
                emailError: false,
                usernameError: false
            };

        case act.LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                success: true
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
                success: false,
                user: {},
                isLoggedIn: false
            }

        case act.AUTO_LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggingIn: true
            }

        case act.SIGNUP_ERRORS:
            return {
                ...state,
                user: {},
                isLoggingIn: false,
                emailError: action.payload.error.email !== undefined,
                usernameError: action.payload.error.username !== undefined,
                creation: undefined
            }

        default:
            return state;
    }



}