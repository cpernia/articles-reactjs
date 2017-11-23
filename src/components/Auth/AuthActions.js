
import {
    LOGOUT,
    TRY_SIGN_IN,
    TRY_SIGN_UP
} from "./ActionTypes";

export function trySignIn({email, password}, history) {
    return {
        type: TRY_SIGN_IN,
        payload: {
            user: { email, password },
            history: history
        }
    }
}

export function trySignUp({email, password}) {
    return {
        type: TRY_SIGN_UP,
        payload: { email, password }
    }
}

export function logout(history) {
    return {
        type: LOGOUT,
        payload: history
    }
}