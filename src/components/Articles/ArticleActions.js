
import {
    TRY_FETCH_ARTICLES,
    TRY_FETCH_ARTICLE,
    TRY_FETCH_MY_ARTICLES,
    TRY_CREATE_ARTICLE,
    TRY_FETCH_ARTICLE_TO_EDIT,
    RESET_FORM,
    TRY_EDIT_ARTICLE,
    DELETE_ARTICLE
} from "./ActionTypes";

export function tryFetchArticles() {
    return {
        type: TRY_FETCH_ARTICLES
    }
}

export function tryFetchArticle(id) {
    return {
        type: TRY_FETCH_ARTICLE,
        payload: id
    }
}

export function tryFetchMyArticles() {
    return {
        type: TRY_FETCH_MY_ARTICLES
    }
}

export function tryCreateArticle(article, history) {
    return {
        type: TRY_CREATE_ARTICLE,
        payload: {
            article,
            history
        }
    }
}

export function tryFetchArticleToEdit(articleId) {
    return {
        type: TRY_FETCH_ARTICLE_TO_EDIT,
        payload: articleId
    }
}

export function resetForm() {
    return {
        type: RESET_FORM
    }
}

export function tryEditArticle(article, articleForUsersList, history) {
    return {
        type: TRY_EDIT_ARTICLE,
        payload: {
            article,
            articleForUsersList,
            history
        }
    }
}

export function deleteArticle(articleId, history) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId,
            history
        }
    }
}