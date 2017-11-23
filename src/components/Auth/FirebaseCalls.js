import firebase from 'firebase';

export function signIn (payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
}

export function signUp (payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
}

export function getIdToken() {
    return firebase.auth().currentUser.getIdToken();
}

export function getEmail() {
    return firebase.auth().currentUser.email;
}