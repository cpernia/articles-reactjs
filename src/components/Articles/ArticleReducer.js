import {
    TRY_FETCH_ARTICLE,
    FETCH_ARTICLE,
    FETCH_ARTICLES,
    FETCH_MY_ARTICLES,
    FETCH_ARTICLE_TO_EDIT,
    RESET_FORM
} from "./ActionTypes";

const INITIAL_STATE = {
    articles: {},
    articleViewed: {},
    loadingArticle: false,
    myArticles: {},
    articleToEdit: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_ARTICLES:
            return { ...state, articles: action.payload };
        case TRY_FETCH_ARTICLE:
            return { ...state, loadingArticle: true };
        case FETCH_ARTICLE:
            return { ...state, loadingArticle: false, articleViewed: action.payload };
        case FETCH_MY_ARTICLES:
            return { ...state, myArticles: action.payload };
        case FETCH_ARTICLE_TO_EDIT:
            return { ...state, articleToEdit: action.payload };
        case RESET_FORM:
            return { ...state, articleToEdit: {} };
        default:
            return state
    }
}