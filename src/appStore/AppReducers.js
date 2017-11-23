import { combineReducers } from 'redux';
import authReducer from '../components/Auth/AuthReducer';
import articleReducer from '../components/Articles/ArticleReducer';
import { reducer as authFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    articles: articleReducer,
    form: authFormReducer
});

export default rootReducer;
