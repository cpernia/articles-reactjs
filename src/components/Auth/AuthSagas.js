import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from './FirebaseCalls';

import {
    TRY_SIGN_IN,
    SIGN_IN_SUCCESS,
    TRY_SIGN_UP,
    SIGN_UP_SUCCESS
} from "./ActionTypes";

function* trySignIn(action) {
    try {
        yield call(Api.signIn, action.payload.user);

        const token = yield Api.getIdToken();
        const email = yield Api.getEmail();

        yield put({ type: SIGN_IN_SUCCESS, payload: {
            token,
            email
        }});

        action.payload.history.push('/');


    } catch (e) {
        console.log(e);
    }
}

function* trySignUp(action) {
    try {

        yield call(Api.signUp, action.payload.user);

        const token = yield Api.getIdToken();
        const email = yield Api.getEmail();

        yield put({ type: SIGN_UP_SUCCESS, payload: {
            token,
            email
        }});

        action.payload.history.push('/');

    } catch (e) {
        console.log(e);
    }

}


export default function* authSagas () {
    yield [
        takeLatest(TRY_SIGN_IN, trySignIn),
        takeLatest(TRY_SIGN_UP, trySignUp),
    ]
}