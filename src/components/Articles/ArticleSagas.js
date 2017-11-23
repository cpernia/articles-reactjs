import { call, put, takeLatest } from 'redux-saga/effects';

import {
    TRY_FETCH_ARTICLES,
    FETCH_ARTICLES,
    TRY_FETCH_ARTICLE,
    FETCH_ARTICLE,
    FETCH_MY_ARTICLES,
    TRY_FETCH_MY_ARTICLES,
    TRY_CREATE_ARTICLE,
    TRY_FETCH_ARTICLE_TO_EDIT,
    FETCH_ARTICLE_TO_EDIT,
    TRY_EDIT_ARTICLE,
    DELETE_ARTICLE
} from "./ActionTypes";

import * as Api from './FirebaseCalls';

function* fetchArticles() {

    try {
        const articles = yield call(Api.getArticles);

        yield put({ type: FETCH_ARTICLES, payload: articles })

    } catch (e) {
        console.log(e);
    }

}

function* fetchArticle(action) {

    try {
        const article = yield call(Api.getArticle, action.payload);

        yield put({ type: FETCH_ARTICLE, payload: article })

    } catch (e) {
        console.log(e);
    }

}

function* fetchMyArticles() {

    try {

        const uid = yield call(Api.getUID);

        const myArticles = yield call(Api.getMyArticles, uid);

        yield put({ type: FETCH_MY_ARTICLES, payload: myArticles })

    } catch (e) {
        console.log(e);
    }

}

function* createArticle(action) {

    try {

        const articleId = yield call(Api.generateArticleId);

        const userEmail = yield call(Api.getUserEmail);

        const uid = yield call(Api.getUID);

        const article = {...action.payload.article, id: articleId, owner: userEmail, date: Date.now()};

        yield call(Api.saveArticle, article);

        const articleTemporal = {
            id: article.id,
            category: article.category,
            imgPath: article.imgPath,
            resume: article.resume,
            title: article.title,
            date: article.date
        };

        yield call(Api.saveArticleOnUserCollection, {uid, articleTemporal});

        action.payload.history.push('/articles');

    } catch (e) {
        console.log(e);
    }

}

function* fetchArticleToEdit(action) {

    try {

        const articleToEdit = yield call(Api.getArticle, action.payload);

        yield put({ type: FETCH_ARTICLE_TO_EDIT, payload: articleToEdit })

    } catch (e) {
        console.log(e);
    }

}

function* editArticle(action) {

    try {

        const uid = yield call(Api.getUID);

        yield call(Api.editArticle, {
            uid,
            article: action.payload.article,
            articleForUsersList: action.payload.articleForUsersList,
        });

        action.payload.history.push('/my-articles');

    } catch (e) {
        console.log(e);
    }

}

function* deleteArticle(action) {

    try {

        const uid = yield call(Api.getUID);

        yield call(Api.deleteArticle, {
            uid,
            articleId: action.payload.articleId
        });

        action.payload.history.push('/my-articles');

    } catch (e) {
        console.log(e);
    }

}


export default function* authSagas () {
    yield [
        takeLatest(TRY_FETCH_ARTICLES, fetchArticles),
        takeLatest(TRY_FETCH_ARTICLE, fetchArticle),
        takeLatest(TRY_FETCH_MY_ARTICLES, fetchMyArticles),
        takeLatest(TRY_CREATE_ARTICLE, createArticle),
        takeLatest(TRY_FETCH_ARTICLE_TO_EDIT, fetchArticleToEdit),
        takeLatest(TRY_EDIT_ARTICLE, editArticle),
        takeLatest(DELETE_ARTICLE, deleteArticle),
    ]
}