import firebase from 'firebase';
import _ from 'lodash';

export function getArticles () {
    return firebase.database().ref(`/articles`).once('value')
            .then(
                (data) => data.val()
            );
}

export function getArticle (id) {
    return firebase.database().ref(`/articles/${id}`).once('value')
            .then(
                (data) => data.val()
            );
}

export function getUID() {
    return firebase.auth().currentUser.uid;
}

export function getUserEmail() {
    return firebase.auth().currentUser.email;
}

export function getMyArticles (uid) {
    return firebase.database().ref(`/users/${uid}/articles`).once('value')
        .then(
            (data) =>  {
                if(_.isArrayLike(data.val())) {
                    return(
                        _.transform(data.val(), function(result, value) {
                            result[value.id] = value;
                        }, {})
                    )
                }
                return data.val();
            }
        );
}

export function generateArticleId() {
    return firebase.database().ref('/articles/').push().key;
}

export function saveArticle(article) {
    return firebase.database().ref(`/articles/${article.id}`).update(article)
}

export function saveArticleOnUserCollection(data) {
    return firebase.database()
        .ref('/users/' + data.uid + '/articles/' + data.articleTemporal.id).set(data.articleTemporal)
}

export function editArticle(data) {
    const updates = {};
    updates['/articles/' + data.article.id] = data.article;
    updates['/users/' + data.uid + '/articles/' + data.article.id] = data.articleForUsersList;

    return firebase.database().ref().update(updates);
}

export function deleteArticle(data) {
    const updates = {};
    updates['/articles/' + data.articleId] = null;
    updates['/users/' + data.uid + '/articles/' + data.articleId] = null;

    return firebase.database().ref().update(updates);
}