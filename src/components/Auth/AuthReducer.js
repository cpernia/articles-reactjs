
import {
    LOGOUT,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
} from "./ActionTypes";

const INITIAL_STATE = {
    authenticated: false,
    token: '',
    email: '',
    error: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: '',
                authenticated: true,
                token: action.payload.token,
                email: action.payload.email
            };
        case LOGOUT:
            action.payload.push('/');
            return {
                ...state,
                error: '',
                authenticated: false,
                token: '',
                email: ''
            };
        default:
            return state
    }
}